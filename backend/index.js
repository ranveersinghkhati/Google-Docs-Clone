import { Server } from 'socket.io';
import Connection from './Database/db.js';

import { getdocument, updateDocument } from './controller/document-controller.js';

const PORT = 9000;

Connection();

const io = new Server(PORT, {
    cors: {
        origin: "http://localhost:3000",
        method: ['GET', 'POST']
    }
});
// server connection

io.on('connection', socket => {
    //catching change from frontend
    socket.on('get-document', async documentId => {

        const document = await getdocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);
        socket.on('send-changes', delta => {
            // console.log("connected", delta);
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        })
        socket.on('save-document', async data => {
            await updateDocument(documentId, data);
        })
    })
});