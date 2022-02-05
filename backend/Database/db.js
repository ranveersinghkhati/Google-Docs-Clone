import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb://Uzumaki_Naruto:Uzumaki_Naruto_22@google-docs-clone-shard-00-00.v0i3o.mongodb.net:27017,google-docs-clone-shard-00-01.v0i3o.mongodb.net:27017,google-docs-clone-shard-00-02.v0i3o.mongodb.net:27017/GOOGLE-DOCS-CLONE?ssl=true&replicaSet=atlas-xpdunx-shard-0&authSource=admin&retryWrites=true&w=majority';

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("connection successful with db");

    } catch (error) {
        console.log("Error while connecting database", error);
    }
}
export default Connection;