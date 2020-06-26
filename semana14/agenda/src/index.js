"use strict";
exports.__esModule = true;
var moment = require("moment");
moment.locale("pt-br");
var allEvents = [
    {
        name: "Estudar Banco de Dados",
        description: "Na plataforma Data Camp",
        startAt: moment("25/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("25/06/2020 21:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Estudar ML",
        description: "Na plataforma ZTM, usando jupyter notebook",
        startAt: moment("27/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("27/06/2020 20:00", "DD/MM/YYYY HH:mm")
    },
];
var createEvent = function (name, description, startAt, finishAt) {
    if (!name || !description || !startAt || !finishAt) {
        console.log("There is an invalid input");
        return;
    }
    var diffStartAndToday = startAt.diff(moment(), "seconds");
    var diffFinishAndToday = finishAt.diff(moment(), "seconds");
    if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
        console.log("We haven't invented a time-travel machine yet.");
        return;
    }
    allEvents.push({
        name: name,
        description: description,
        startAt: startAt,
        finishAt: finishAt
    });
};
function showEvents(list) {
    list.forEach(function (event) {
        var duration = event.finishAt.diff(event.startAt, "minutes");
        var today = moment();
        var daysUntilEventBeggins = event.finishAt.diff(today, "days");
        console.log("\n\n    Nome: " + event.name + "\n\n    Hor\u00E1rio de in\u00EDcio: " + event.startAt.format("LLLL") + "\n\n    Hor\u00E1rio de fim: " + event.finishAt.format("DD [de] MMMM [de] YYYY, HH:mm") + "\n\n    Descri\u00E7\u00E3o: " + event.description + "\n\n    Dura\u00E7\u00E3o: " + duration + " minutos\n\n    Dias at\u00E9 o evento: " + daysUntilEventBeggins + "\n    ");
    });
}
showEvents(allEvents);
createEvent("Jogar Divinity 2", "Como Necromancer com o belo nome de Hugo", moment("28/06/2020 17:00", "DD/MM/YYYY HH:mm"), moment("28/06/2020 19:00", "DD/MM/YYYY HH:mm"));
createEvent("Estudar Estatística", "Curso Online", moment("23/06/2020 17:00", "DD/MM/YYYY HH:mm"), moment("23/06/2020 19:00", "DD/MM/YYYY HH:mm"));
showEvents(allEvents);
// 2b. Para ajustar os horários aos da Inglaterra, bastaria setar o utcOffset antes de setar o formato.
