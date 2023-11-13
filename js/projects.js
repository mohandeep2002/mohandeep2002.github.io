function timeAgo(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - inputDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference > 365) {
    const years = Math.floor(daysDifference / 365);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (daysDifference > 30) {
    const months = Math.floor(daysDifference / 30);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
  }
}
const unityNotesAppDate = "2023-10-12";
document.getElementById("unityNotesApp").textContent =
  timeAgo(unityNotesAppDate);

const spaceShooterDate = "2022-06-04";
document.getElementById("spaceShooter").textContent = timeAgo(spaceShooterDate);
console.log("Everything is working fine ");
console.log(timeAgo("2002-05-02"));
console.log(timeAgo("2022-06-04"));
