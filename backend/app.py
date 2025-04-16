from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from sqlalchemy.exc import OperationalError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

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
        doctor_name = request.args.get('doctor')  # Get doctor name from query params
        if doctor_name:
            # Use the correct column name 'name' in the query
            query = text("SELECT * FROM appoint WHERE name = :name")
            result = db.session.execute(query, {'name': doctor_name}).fetchall()
        else:
            query = text("SELECT * FROM appoint")
            result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"error": "No appointments found"}), 404
        
        # Convert the result to a list of dictionaries and serialize time/date fields
        data = []
        for row in result:
            row_dict = dict(row._mapping)
            row_dict['appointment_time'] = row_dict['appointment_time'].strftime('%H:%M:%S')  # Convert time to string
            row_dict['appointment_date'] = row_dict['appointment_date'].strftime('%Y-%m-%d')  # Convert date to string
            data.append(row_dict)

        return jsonify(data)
    
    except Exception as e:
        print(f"Error in GET /api/appoint: {e}")  # Log the error for debugging
        return jsonify({"error": str(e)}), 500
    

@app.route('/api/appoint', methods=['POST'])
def post_appoint():
    try:
        data = request.json
        name = data.get('name')
        appointment_date = data.get('date')  # Match the column name in the DB
        appointment_time = data.get('time')  # Match the column name in the DB
        patient_name = data.get('patient_name')  # Match the column name in the DB
        patient_no = data.get('patient_no')  # Match the column name in the DB
        
        # Validate input
        if not name or not appointment_date or not appointment_time:
            return jsonify({"error": "Name, date, and time are required fields."}), 400

        # Insert the appointment into the database
        query = text("INSERT INTO appoint (name, appointment_date, appointment_time,patient_name,patient_no) VALUES (:name, :appointment_date, :appointment_time , :patient_name, :patient_no)")
        db.session.execute(query, {'name': name, 'appointment_date': appointment_date, 'appointment_time': appointment_time, 'patient_name': patient_name, 'patient_no': patient_no})
        db.session.commit()

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
        # Query to count the number of appointments for each doctor
        query = text("""
            SELECT name, COUNT(*) as appointment_count
            FROM appoint
            GROUP BY name
        """)
        result = db.session.execute(query).fetchall()

        if not result:
            return jsonify({"error": "No doctors or appointments found"}), 404

        # Convert the result to a list of dictionaries
        data = [dict(row._mapping) for row in result]
        return jsonify(data)

    except Exception as e:
        print(f"Error in GET /api/doctor-appointments: {e}")  # Log the error for debugging
        return jsonify({"error": str(e)}), 500
    
    
if __name__ == '__main__':
    app.run(debug=True)