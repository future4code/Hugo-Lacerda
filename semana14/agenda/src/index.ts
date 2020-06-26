import * as moment from "moment";

moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

const allEvents: event[] = [
  {
    name: "Estudar Banco de Dados",
    description: "Na plataforma Data Camp",
    startAt: moment("25/06/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("25/06/2020 21:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Estudar ML",
    description: "Na plataforma ZTM, usando jupyter notebook",
    startAt: moment("27/06/2020 17:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("27/06/2020 20:00", "DD/MM/YYYY HH:mm"),
  },
];

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !finishAt) {
    console.log("There is an invalid input");
    return;
  }
  const diffStartAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
    console.log("We haven't invented a time-travel machine yet.");
    return;
  }

  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
};

function showEvents(list: event[]): void {
  list.forEach((event: event) => {
    const duration = event.finishAt.diff(event.startAt, "minutes");

    const today = moment();
    const daysUntilEventBeggins = event.finishAt.diff(today, "days");

    console.log(`\n
    Nome: ${event.name}\n
    Horário de início: ${event.startAt.format("LLLL")}\n
    Horário de fim: ${event.finishAt.format("DD [de] MMMM [de] YYYY, HH:mm")}\n
    Descrição: ${event.description}\n
    Duração: ${duration} minutos\n
    Dias até o evento: ${daysUntilEventBeggins}
    `);
  });
}

showEvents(allEvents);
createEvent(
  "Jogar Divinity 2",
  "Como Necromancer com o belo nome de Hugo",
  moment("28/06/2020 17:00", "DD/MM/YYYY HH:mm"),
  moment("28/06/2020 19:00", "DD/MM/YYYY HH:mm")
);
createEvent(
  "Estudar Estatística",
  "Curso Online",
  moment("23/06/2020 17:00", "DD/MM/YYYY HH:mm"),
  moment("23/06/2020 19:00", "DD/MM/YYYY HH:mm")
);
showEvents(allEvents);

// 2b. Para ajustar os horários aos da Inglaterra, bastaria setar o utcOffset antes de setar o formato.
