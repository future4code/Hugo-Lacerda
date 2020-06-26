import axios from "axios";
import { Console } from "console";

const baseUrl: string =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

// a.

type subs = {
  id: string;
  name: string;
  email: string;
};

const subGen = async (name: string, email: string): Promise<void> => {
  await axios.put(`${baseUrl}/subscribers`, {
    name,
    email,
  });
};

// b.

const getSubscribers = async (): Promise<subs[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const notify = async (subs: subs[], message: string): Promise<void> => {
  const notificationArray: Promise<any>[] = [];
  for (const sub of subs) {
    notificationArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: sub.id,
        message: message,
      })
    );
  }

  await Promise.all(notificationArray);
  console.log("All notifications sent");
};

const newsGen = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date,
  });

  const allSubs = await getSubscribers();

  await notify(allSubs, `Leia: ${title}`);
};

// c.

const getNotifications = async (): Promise<any> => {
  const users = await getSubscribers();

  const notificationsPromises = [];
  for (const user of users) {
    notificationsPromises.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notificationsPromises);

  const resData = result.map((res) => res.data);

  return resData;
};