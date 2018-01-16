import mongojs from 'mongoist';
import db from '../modules/database';
import { Get, Post } from '../modules/express-decorator';

class ShopApi {

    @Get("/api/vendor_items")
    async getVendorItems(req, res) {
        let items = await db.vendorItems.find({});
        return res.send(items);
    }

    
    @Get("/api/vendor_items/:item_id") 
    async getVendorItem(req, res) {
        let item_id = req.params.item_id;
        let item = await db.vendorItems.findOne({_id: mongojs.ObjectId(item_id) });
        res.send(item);
    }   
    
}

export { ShopApi };