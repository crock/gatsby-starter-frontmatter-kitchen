import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

export default async (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
    
    res.status(200).send("Hello World!")
}
