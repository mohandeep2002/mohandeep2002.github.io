function daysAgo(dateString) {
  const inpudate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - inpudate;
  const daysDiffernece = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDiffernece;
}
const unityNotesAppDate = "2023-10-12";
document.getElementById("unityNotesApp").textContent = `${daysAgo(
  unityNotesAppDate
)} days ago`;
