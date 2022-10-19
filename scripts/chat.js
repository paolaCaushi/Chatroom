// 1- adding new chat documents
// 2- setting up a real-time listener to get new chats
// 3- updating the username
// 4- updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chat");
  }
  async addChat(message) {
    //format a chat obj
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    //save chat
    const response = await this.chats.add(chat);
    return response;
  }
}

const chatroom = new Chatroom("gaming", "shaun");
chatroom
  .addChat("hello everyone")
  .then(() => console.log("chat added"))
  .catch((err) => console.log(err));
