const jwt =require('jsonwebtoken');

const {Domain ,User} =require('../middlewares');
const {createToken,tokenTest}= require('../controllers/v1');
exports.createToken =async(req,res) =>{
    const{Domain,User}=req.body;
    try {
        const domain = await Domain.findOne({
        where:{clientSecret},
        include:{
            model:User,
            attribute:['nick','id'],
        },

        });
      if(!domain){
        return res.status(401).json({
              code:401,
              message:'등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
        });
      }
      const token =jwt.sign({
         id:domain.User.id,
         nick:domain.User.nick,

      }, process.env.JWT_SECRET,{
             expiresIn:'1m',
             issuer:'nodebird',
      });
      return res.json({
       code:200,
       message:'토큰이 발금되었습니다.',
       token,
      });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code:500,
            message:'서버 에러',
        });
    }
};
exports.tokenTest=(req,res)=>{
  res.json(res.local.decoded);
};