from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from sqlalchemy.exc import OperationalError
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

# PostgreSQL configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:almighty101@localhost/sem6'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/')
def index():
    try:
        result = db.session.execute(text('SELECT * FROM mini6 LIMIT 1'))
        return "✅ Connected to PostgreSQL and accessed 'mini6' table successfully!"
    except OperationalError as e:
        return f"❌ Failed to connect to PostgreSQL: {e}"
    except Exception as e:
        return f"⚠️ Connected to database, but error accessing 'mini6': {e}"

@app.route('/api/data', methods=['GET']) 
def get_data():
    try:
        query = text("SELECT * FROM mini6")
        result = db.session.execute(query).fetchall()
        if not result:
            return jsonify({"error": "No doctors found"}), 404
        data = [dict(row._mapping) for row in result]
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/appoint', methods=['GET'])
def get_appoint():
    try:
        doctor_name = request.args.get('doctor')
        if doctor_name:
            query = text("SELECT * FROM appoint WHERE name = :name")
            result = db.session.execute(query, {'name': doctor_name}).fetchall()
        else:
            query = text("SELECT * FROM appoint")
            result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"error": "No appointments found"}), 404

        data = []
        for row in result:
            row_dict = dict(row._mapping)
            row_dict['appointment_time'] = row_dict['appointment_time'].strftime('%H:%M:%S')
            row_dict['appointment_date'] = row_dict['appointment_date'].strftime('%Y-%m-%d')
            data.append(row_dict)

        return jsonify(data)

    except Exception as e:
        print(f"Error in GET /api/appoint: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/appoint', methods=['POST'])
def post_appoint():
    try:
        data = request.json
        name = data.get('name')
        appointment_date = data.get('date')
        appointment_time = data.get('time')
        patient_name = data.get('patient_name')
        patient_no = data.get('patient_no')
        email = data.get('email')

        if not name or not appointment_date or not appointment_time:
            return jsonify({"error": "Name, date, and time are required fields."}), 400

        query = text("""
            INSERT INTO appoint (name, appointment_date, appointment_time, patient_name, patient_no)
            VALUES (:name, :appointment_date, :appointment_time, :patient_name, :patient_no)
        """)
        db.session.execute(query, {
            'name': name,
            'appointment_date': appointment_date,
            'appointment_time': appointment_time,
            'patient_name': patient_name,
            'patient_no': patient_no
        })
        db.session.commit()

        if email:
            send_confirmation_email(email, name, appointment_date, appointment_time)

        return jsonify({"message": "Appointment created successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/appoint/<int:id>', methods=['DELETE'])
def delete_appoint(id):
    try:
        query = text("SELECT * FROM appoint WHERE id = :id")
        result = db.session.execute(query, {'id': id}).fetchone()
        if not result:
            return jsonify({"error": "Appointment not found"}), 404

        query = text("DELETE FROM appoint WHERE id = :id")
        db.session.execute(query, {'id': id})
        db.session.commit()
        return jsonify({"message": "Appointment deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/doctor-appointments', methods=['GET'])
def get_doctor_appointments():
    try:
        query = text("""
            SELECT name, COUNT(*) as appointment_count
            FROM appoint
            GROUP BY name
        """)
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"error": "No doctors or appointments found"}), 404

        data = [dict(row._mapping) for row in result]
        return jsonify(data)

    except Exception as e:
        print(f"Error in GET /api/doctor-appointments: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.json
        doctor_name = data.get('doctor_name')
        patient_no = data.get('patient_no')
        rating = data.get('rating')

        if not doctor_name or not patient_no or not rating:
            return jsonify({"error": "Doctor name, patient number, and rating are required"}), 400

        # ✅ Match both patient number AND doctor name
        appointment_query = text("""
            SELECT * FROM appoint
            WHERE patient_no = :patient_no AND name = :doctor_name
        """)
        appointment_result = db.session.execute(appointment_query, {
            'patient_no': patient_no,
            'doctor_name': doctor_name
        }).fetchone()

        if not appointment_result:
            return jsonify({"error": "Invalid patient number for the selected doctor"}), 400

        feedback_query = text("""
            INSERT INTO feedback (doctor_name, patient_no, rating)
            VALUES (:doctor_name, :patient_no, :rating)
        """)
        db.session.execute(feedback_query, {
            'doctor_name': doctor_name,
            'patient_no': patient_no,
            'rating': rating
        })
        db.session.commit()

        return jsonify({"message": "Feedback submitted successfully"}), 201
    except Exception as e:
        print(f"Error in POST /api/feedback: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/feedback-data', methods=['GET'])
def get_feedback_data():
    try:
        query = text("""
            SELECT doctor_name, rating, COUNT(*) as count
            FROM feedback
            GROUP BY doctor_name, rating
        """)
        result = db.session.execute(query).fetchall()
        data = [dict(row._mapping) for row in result]
        return jsonify(data)
    except Exception as e:
        print(f"Error in GET /api/feedback-data: {e}")
        return jsonify({"error": str(e)}), 500

def send_confirmation_email(to_email, doctor, date, time):
    sender_email = 'tbhbadguyz@gmail.com'
    sender_password = 'hshihwsbemxekxqp'  # Use Gmail app password

    subject = "Appointment Confirmation"
    body = f"""
    Hello,

    Your appointment with Dr. {doctor} has been confirmed.

    📅 Date: {date}
    🕒 Time: {time}

    Thank you for booking with us!
    """

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = to_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(message)
    except Exception as e:
        print("❌ Email error:", e)

if __name__ == '__main__':
    app.run(debug=True)
