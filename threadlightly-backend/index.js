import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Immanuella:OBbLg1piTDpRiuxr@cluster0.cjbizq8.mongodb.net/?retryWrites=true&w=majority')
      .then(() => console.log('MongoDB connected...'))
      .catch(err => console.log(err));
    