import Immutable from 'immutable';
import _ from 'lodash';
import Constants from '../constants';
//import * as Actions from '../actions/userActions';

const purchaseOrderInitialState = {
    purchaseOrder: Immutable.fromJS({

        newPurchaseOrder: {
            form: {
                title: ""
            },
            status: false
        },

        pos:[],

        selectedPurchaseOrder: {

            // _id: "cg35678vbq4cb3",
            // title: "For A cool Project",            
            // billingOfMaterials: {
            //     orderQty: 1
            // },
            // recurringOrdering: {
            //     status: false,
            //     intervalType: 'days', //week,month
            //     intervals: 2,
            //     startDate: "date"
            // },          
            // items:[{
            //         _id: "t6g6v57r87687t86tvn7hk",
            //         title: "Parts Washer Solution",
            //         tradeMark: "OzzyJuice®",
            //         subTitle: "brand",
            //         imgUrl: "http://localhost:7676/images/test_products/smart_washer.png",
            //         itemBlurb: "no. Ne mel putant dissentiet, clita recusabo molestiae an per, at veniam phaedrum has. Ea quo erat nusquam commune. No placerat ponderum lucilius sea, labores gubergren vel ne. In cum equidem oporteat",
            //         shortDescription: "Nec voluptaria voluptatibus ex",
            //         descriptions : [
            //             "Lorem ipsum dolor sit amet, mei alterum dolorum ex. Eum verear viderer facilisi ut, eirmod feugiat accumsan est no. Ne mel putant dissentiet, clita recusabo molestiae an per, at veniam phaedrum has. Ea quo erat nusquam commune. No placerat ponderum lucilius sea, labores gubergren vel ne. In cum equidem oporteat.",                
            //             "Nec voluptaria voluptatibus ex, putant copiosae argumentum ne duo, sit ea animal tincidunt. At timeam pericula salutatus eam. Wisi omnes voluptatibus sit ei, ea his epicuri voluptatum, cu sed similique gloriatur. Est doming semper iriure ei, ut adhuc blandit sententiae usu. Nam oblique blandit offendit te."
            //         ],
            //         searchText: "Nec voluptaria voluptatibus ex, putant copiosae argumentum ne duo, sit ea animal tincidunt. At timeam pericula salutatus eam. Wisi omnes voluptatibus sit ei, ea his epicuri voluptatum, cu sed similique gloriatur. Est doming semper iriure ei, ut adhuc blandit sententiae usu. Nam oblique blandit offendit te.",
            //         bullets : [
            //             "Lorem ipsum dolor sit amet, mei alterum dolorum ex.",
            //             "Putant copiosae argumentum ne duo",
            //             "At timeam pericula salutatus eam",
            //             "Eirmod feugiat accumsan est no mel putant dissentiet"
            //         ],
            //         vendor : {
            //             vendorId: "76gfwe5ehg678",
            //             vendorName: "Some Other Vdenor",
            //             discountPrice: 1234,
            //             buyerPrice:  1300,
            //             shipping: {},
            //             inventory: 9
            //         },
            //         partId: "12345623",
            //         pkgType: "Case Qty",                    
            //         per_pkg: 100,                           
            //         sku: "8yiyb7y87bk8yb",
            //         modelNo: "y7y87by8b87y8y7b",
            //         manufacturingId : "8b6bt76tb7tb76tb",
            //         manufacturingPartNo : "6b77b5tb7gb6bbbb7bfg",                    
            //         details: {
            //             size_imperial: '2" x 36 yds',
            //             size_metric: '5.1 cm x 32.91 m',
            //             colour: "Yellow"
            //         }        
            //     }
            // ]


        }
    })
};

function purchaseOrderReducer(state = purchaseOrderInitialState.purchaseOrder, action) {
    switch (action.type) {

        case Constants.TOGGLE_NEW_PURCHASE_ORDER_MODAL:        
            if(action.status === true){
                state = state.updateIn(['newPurchaseOrder'], (d) => purchaseOrderInitialState.purchaseOrder.get('newPurchaseOrder'));   
            }
            state = state.updateIn(['newPurchaseOrder', 'status'], (data) => action.status);
            return state;

        case Constants.UPDATE_NEW_PURCHASE_TITLE_FIELD:        
            state = state.updateIn(['newPurchaseOrder', 'form', 'title'], (data) => action.text);
            return state;

        case Constants.LOAD_PURCHASE_ORDERS:  
            state = state.updateIn(['pos'], (data) => Immutable.fromJS(action.pos));
            return state;

        case Constants.SELECTED_PURCHASE_ORDER:  
            state = state.updateIn(['selectedPurchaseOrder'], (data) => Immutable.fromJS(action.purchaseOrder));
            return state;

        case Constants.CLEAR_SELECTED_PURCHASE_ORDER:  
            state = state.updateIn(['selectedPurchaseOrder'], (data) => Immutable.fromJS({}));
            return state;
        default:
            return state;
    }
}

export { purchaseOrderReducer, purchaseOrderInitialState };