const initialProducts = [];
const productTableHeadings = ['Product Name', 'Price', 'Category', 'Image'];
const productCategories = [
    {id: 1, name: 'Shirts'},
    {id: 2, name: 'Jeans'},
    {id: 3, name: 'Jackets'},
    {id: 4, name: 'Sweaters'},
    {id: 5, name: 'Accessories'}
]

const ProductTableRow = ({product}) => {
    const {name, price, category, imageUrl} = product;
    return (
        <tr>
            <td>{name || 'NA'}</td>
            <td>${price || 'NA'}</td>
            <td>{category}</td>
            <td><a href={imageUrl} target="_blank">View</a></td>
        </tr>
    );
}

const ProductTable = ({headings, products}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                {headings.map((heading, index) => <th key={index}>{heading}</th>)}
            </tr>
            </thead>

            <tbody>
            {products.length > 0 ? (
                products.map((product) => <ProductTableRow key={product.id} product={product}/>)
            ) : (
                <tr className="text-center">
                    <td colSpan="4">No Products added yet</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

class ProductAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            price: '$',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // I have named the form as addProduct
        const {name, price, category, imageUrl} = document.forms.addProduct;
        const priceWithoutDollar = price.value.substring(1); // Getting value without '$'

        const product = {
            name: name.value,
            price: priceWithoutDollar,
            category: category.value,
            imageUrl: imageUrl.value
        }
        this.props.addProduct(product);

        name.value = '';
        category.value = 'Shirts';
        imageUrl.value = '';
        this.setState({price: '$'});
    }

    handlePriceChange(event) {
        const priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'
        this.setState({price: `$${priceWithoutDollar}`})
    }

    render() {
        return (
            <form name="addProduct" onSubmit={this.handleSubmit} className="add-product-form">
                <div className="form-element-container">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        {
                            productCategories.map(({id, name}) => <option id={id} value={name}>{name}</option>)
                        }
                    </select>
                </div>

                <div className="form-element-container">
                    <label htmlFor="price">Price Per Unit</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.handlePriceChange}/>
                </div>

                <div className="form-element-container">
                    <label htmlFor="name">Product Name</label>
                    <input type="text" name="name"/>
                </div>

                <div className="form-element-container">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl"/>
                </div>

                <button type="submit" className="submit-button submit-button-dark">Add Product</button>
            </form>
        )
    }
}

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {products: initialProducts};
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({products: initialProducts});
    }

    addProduct(product) {
        product.id = this.state.products.length + 1;
        this.setState({products: [...this.state.products, product]});
    }

    render() {
        return (
            <div className="root-container">
                <h2>My Company Inventory</h2>
                <div>Showing all available products</div>
                <hr/>
                <ProductTable headings={productTableHeadings} products={this.state.products}/>
                <div>Add a new Product</div>
                <hr/>
                <ProductAdd addProduct={this.addProduct}/>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('root'));
