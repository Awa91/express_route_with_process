import express, {Request, Response} from 'express';




export const calculate = async (req: Request, res: Response): Promise<void> =>{
  
  
  
  
   
  
  
  
  
  
  
  
  
    const {a, b}= req.body;
    if(a && b && typeof a === 'number' && typeof b === 'number'){
        res.json({
            success: true,
            message: a + b, 
        });
    }else{
        res.json({
            success: false,
            message: 'Missing parameters',
        });
    }

}