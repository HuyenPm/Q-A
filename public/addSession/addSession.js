// var hide = getElementByClassName("hide");
var newEventModal = document.getElementById("new-event-modal");
var eventNameInput = document.getElementById("event-name");
var eventPassword = document.getElementById("event-pass");
var eventBegin = document.getElementById("begin-time");
var eventEnd = document.getElementById("end-time");
var eventList = document.getElementById("event-list");
let socket = io();

function dropclick() {
    var click = document.getElementById("dropContent");
    if (click.className.indexOf("w3-show") == -1) {
        click.className += " w3-show";
    } else {
        click.className = click.className.replace(" w3-show", "");
    }
}

// lấy dữ liệu từ server
axios.get('/api/session/')
    .then(sessions => sessions.data)
    .then(sessions => {
        // eventList.removeChild(bigLoader);
        sessions.forEach(session => {
            addSession(session)
        })
    })
    .catch(error => {
        console.log(error)
    });
    if (r) {
        obj.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode.parentNode.parentNode);
    }
}

function newEventBox() {
    newEventModal.style.display = "block";
}

function closeNewEventBox() {
    newEventModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == newEventModal) {
        newEventModal.style.display = "none";
    }
};

    var newEvent = document.createElement("div");
    newEvent.classList.add("w3-col");
    newEvent.classList.add("s3");
    let beginDate = new Date(newSession.beginDate),
        endDate   = new Date(newSession.endDate);

        newEvent.innerHTML = "<div class=\"w3-card w3-white w3-round-medium\" style=\"margin: 15px 10px 5px 0; cursor: pointer;\" onmouseover=\"mOver(this)\" onmouseout=\"mOut(this)\">" +
        "  <div class=\"w3-container\" style=\"padding: 5px 10px;\">" +
        "	  <div class=\"w3-bar\">" +
        `		  <label class=\"w3-bar-item w3-large w3-text-teal\" style=\"display: block; padding-left: 0\">${newSession.eventCode}</label>` +
        "		  <button class=\"w3-bar-item w3-right hide inherit-button w3-button w3-hover-teal\" style=\"cursor: pointer;opacity:1.0\" onclick=\"deleteEvent(this)\">" +
        "			  <i class=\"fa fa-close\"></i>" +
        "		  </button>" +
        "	  </div>" +
        `	  <label class=\"w3-xlarge\" style=\"display: block;\">${newSession.eventName}</label>` +
        `	  <label class=\"w3-small\" style=\"display: block; opacity: 0.5;\">${beginDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}</label>` +
        "	  <br><br>" +
}


// kênh thêm phiên hỏi đáp
socket.on('addSession', session => {
    addSession(session)
});
