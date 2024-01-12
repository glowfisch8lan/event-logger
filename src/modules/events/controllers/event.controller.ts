import {Request, Response} from "express";
import {s} from "../../../../config/database";
const list = async function (req: Request, res: Response) {
    try {
        const page = Number(req.query?.page) || 1
        const itemPerPage= Number(req.query?.itemPerPage) || 5

        if (itemPerPage > 20) return res.status(500).json('Error')

        const data = await s.models.EventModel.findAll({ offset: (page * itemPerPage - itemPerPage), limit: itemPerPage ,
            order: [
                ['timestamp', 'DESC'],
                ['id', 'DESC']
            ]});
        res.status(200).json({
            items: data,
            page: page,
            pages: Math.ceil(await s.models.EventModel.count() / itemPerPage),
            itemPerPage: itemPerPage
        })
    } catch (e) {
        console.log(e)
        res.status(500).json("Error")
    }
}

export default {
    list
};