import mongojs from 'mongoist';
import db from '../modules/database';
import Promise from 'bluebird';
import { Get, Post } from '../modules/express-decorator';
import { Auth } from '../modules/authorize';

class PurchaseOrderApi {
    
    @Get("/api/purchase_orders/:po_id?")
    async getPurchaseOrders(req, res) {
        let data = {};

        if(req.params.po_id){
            data = { po: { _id : req.params.po_id } };
        }
    
        await this.getPurchaseOrdersAsync(data);
        return res.send(data.purchaseOrders);
    }

    @Get("/api/purchase_orders/create")    
    async createPurchaseOrders(req, res) {
        await this.createPurchaseOrdersAsync(res.locals.user._id.toString(), req.body.title);
        res.send({ created: true });
    }

    @Post("/api/purchase_order/add/:po_id?", true)
    async addItemToPO(req, res) {
    
        if(!req.params.po_id) {

            try{
                let data = {};                
                await this.createPurchaseOrdersAsync(data, res.locals.user._id.toString(), req.body.poTitle);                    
                await this.getPurchaseOrdersAsync(data);                    
                await this.getVendorItemAsync(data, req.body.itemId);                    
                await this.saveItemToPurchaseOrder(data, req.body.vendorId, req.body.qty);                                
                return res.send({ created: true, poId: data.purchaseOrders._id });

            }catch(err){
                console.log('errororo', err)
                return res.send( { error: err });
            }
        }
    }

    async getPurchaseOrdersAsync(data) {

        let id;
        if(data.po){
            id = data.po._id.toString();
        }

        if(!id){
            data.purchaseOrders = await db.purchaseOrders.find({});
        }else{
            data.purchaseOrders = await db.purchaseOrders.findOne({ _id: mongojs.ObjectId(id) });
        }
    }

    async createPurchaseOrdersAsync(data, userId, title) {
        
        var po = {
            title: title,
            billingOfMaterials: {
                orderQty: 1
            },
            createdByUserId: userId,  
            recurringOrdering: {
                status: false,
                intervalType: 'days', //week,month
                intervals: 2,
                startDate: new Date()
            },                                
            items:[],
            createdDate: new Date()
        }

        data.po = await db.purchaseOrders.insert(po);

    }
    
    async getVendorItemAsync(data, itemId) {
        let vendorItem = await db.vendorItems.findOne({ _id: mongojs.ObjectId(itemId) });                 
        data.vendorItem = vendorItem;
    }

    async saveItemToPurchaseOrder(data, vendorId, qty) {
        var update = {
            $push: {
                'items' : { qty: qty, vendorId: vendorId }
            } 
        };
        await db.purchaseOrders.update({ _id: mongojs.ObjectId(data.purchaseOrders._id.toString()) }, update);                 
    }
    
}


export { PurchaseOrderApi }