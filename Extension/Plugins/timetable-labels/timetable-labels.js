if (window.location.pathname === "/timetable" && document.getElementsByClassName("timetable")[0]) {
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(2)").innerHTML = "Monday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(3)").innerHTML = "Tuesday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(4)").innerHTML = "Wednesday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(5)").innerHTML = "Thursday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(6)").innerHTML = "Friday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(7)").innerHTML = "Saturday"
    document.querySelector("#content > div:nth-child(5) > div:nth-child(2) > div > table > thead > tr > th:nth-child(8)").innerHTML = "Sunday"
}