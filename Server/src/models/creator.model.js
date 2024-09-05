import mongoose,{Schema} from 'mongoose';

const creatorSchema=new Schema({
    name:{
      type:String,
      required:true,
    },
      userName:{
        type:String,
        required:true,
        unique:true
      },
      email:{
        type:String,
        required:true,
      },
      type:{
        type:String,
        required:true,
      },
      socialMedia:{
          insta:{
            url:String,
            count:Number
          },

          twitter:{
            url:String,
            count:Number
        },
          facebook:{
            url:String,
            count:Number
          },
          linkedin:{
            url:String,
            count:Number
          },
          youtube:{
            url:String,
            count:Number
        }
      },
      Mobile_No:{
        type:String,
      },
      image:{
        type:String
      },
      location:{
        type:String,
        required:true
      }
      // location:{
      //   type:String,
      //   required:true

        
      // }

})

const Creator=mongoose.model("creator",creatorSchema);
export default Creator;

