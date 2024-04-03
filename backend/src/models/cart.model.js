const {schema, model } = require("moongoose");

// Schema for cart items
const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

// Schema for cart
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [cartItemSchema], // Array of cart items
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    }
});

// Define pre-save hook to calculate total price before saving cart
cartSchema.pre('save', async function(next) {
    try {
        // Calculate total price based on the sum of all item prices
        const total = this.items.reduce((acc, item) => {
            return acc + (item.quantity * item.productId.price);
        }, 0);

        this.totalPrice = total;
        next();
    } catch (error) {
        next(error);
    }
});

// Cart model
const Cart = mongoose.model('Cart', cartSchema);

// Exporterar Cart model
module.exports = Cart;