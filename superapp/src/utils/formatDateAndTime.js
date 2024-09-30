const formatDateAndTime = (date = Date.now()) => {
    const newDate = new Date(date);
  
    // Manually extract day, month, year and pad with leading zeroes if necessary
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-indexed
    const year = newDate.getFullYear();
  
    // Create the date in the desired format
    const formattedDate = `${day}-${month}-${year}`;
  
    // Format the time as per your previous logic
    const formattedTime = newDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  
    return {
      date: formattedDate,
      time: formattedTime,
    };
  };
  
  export default formatDateAndTime;
  