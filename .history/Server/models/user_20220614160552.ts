//step 1 - import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme
import passportLocalMongoose from 'passport-local-mongoose';

//step 2 - create a schema that matches the data
const UserSchema = new Schema
({

    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection:"Users"
});

declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        EmailAddress: String,
        DisplayName: String
    }    
}

//plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);

//step 3 - create a model using the schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

//step 4 - export the model (this makes the file a module)
export default Model;