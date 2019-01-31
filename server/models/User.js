const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {type: String, default: null},
  password: String,
  caption: {type: String, default: "When someone does you a big favor, don't pay it back... PAY IT FORWARD!"},
  description: {type: String, default: "Edit your profile to change this"},
  favLocation: {type: {type: String, default: 'Point'}, coordinates: [Number]},
  offerCategories: [{type: String, enum: ["donations", "loans", "services", "repairs", "leisure", "care", "education", "feeding", "electronics", "animals", "home", "others"]}],
  needCategories: [{type: String, enum: ["donations", "loans", "services", "repairs", "leisure", "care", "education", "feeding", "electronics", "animals", "home", "others"]}],
  facebookID: {type: String, default: null},
  googleID: {type: String, default: null},
  pictureUrl: {type: String, default: 'https://picsum.photos/200/300/?random'},
  status: {type: String, enum: ['Pending Confirmation','Active'], default: 'Pending Confirmation'},
  confirmationCode: {type: String, unique: true},
  role: {type: String, enum: ['Admin', 'User'], default: 'User'},
  boons: [{ type: Schema.Types.ObjectId, ref:'Boon' }],
  favOffering: [{ type: Schema.Types.ObjectId, ref:'Favor' }],
  favWishing: [{ type: Schema.Types.ObjectId, ref:'Favor' }],
  favDone: [{ type: Schema.Types.ObjectId, ref:'Favor' }],
  favReceived: [{ type: Schema.Types.ObjectId, ref:'Favor' }]
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
