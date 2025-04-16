function ProgressBar({ percentage }) {
    let color;
  
    if (percentage >= 75) {
      color = 'bg-green-500';
    } else if (percentage >= 50) {
      color = 'bg-yellow-500';
    } else if (percentage >= 25) {
      color = 'bg-orange-500';
    } else {
      color = 'bg-red-500';
    }
  
    return (
      <div className="relative w-full h-4 bg-gray-300 rounded-md">
        <div
          className={`${color} h-4 rounded-md`}
          style={{ width: `${percentage}%` }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-md font-semibold text-black">
          {percentage.toFixed(0)}%
        </span>
      </div>
    );
  }
  
  export default ProgressBar;
  