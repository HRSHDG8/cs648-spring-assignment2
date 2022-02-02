"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var initialProducts = [];
var productTableHeadings = ['Product Name', 'Price', 'Category', 'Image'];
var productCategories = [{
  id: 1,
  name: 'Shirts'
}, {
  id: 2,
  name: 'Jeans'
}, {
  id: 3,
  name: 'Jackets'
}, {
  id: 4,
  name: 'Sweaters'
}, {
  id: 5,
  name: 'Accessories'
}];

var ProductTableRow = function ProductTableRow(_ref) {
  var product = _ref.product;
  var name = product.name,
      price = product.price,
      category = product.category,
      imageUrl = product.imageUrl;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, name || 'NA'), /*#__PURE__*/React.createElement("td", null, "$", price || 'NA'), /*#__PURE__*/React.createElement("td", null, category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
    href: imageUrl,
    target: "_blank"
  }, "View")));
};

var ProductTable = function ProductTable(_ref2) {
  var headings = _ref2.headings,
      products = _ref2.products;
  return /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headings.map(function (heading, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: index
    }, heading);
  }))), /*#__PURE__*/React.createElement("tbody", null, products.length > 0 ? products.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductTableRow, {
      key: product.id,
      product: product
    });
  }) : /*#__PURE__*/React.createElement("tr", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "4"
  }, "No Products added yet"))));
};

var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  var _super = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super.call(this);
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault(); // I have named the form as addProduct

      var _document$forms$addPr = document.forms.addProduct,
          name = _document$forms$addPr.name,
          price = _document$forms$addPr.price,
          category = _document$forms$addPr.category,
          imageUrl = _document$forms$addPr.imageUrl;
      var priceWithoutDollar = price.value.substring(1); // Getting value without '$'

      var product = {
        name: name.value,
        price: priceWithoutDollar,
        category: category.value,
        imageUrl: imageUrl.value
      };
      this.props.addProduct(product);
      name.value = '';
      category.value = 'Shirts';
      imageUrl.value = '';
      this.setState({
        price: '$'
      });
    }
  }, {
    key: "handlePriceChange",
    value: function handlePriceChange(event) {
      var priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'

      this.setState({
        price: "$".concat(priceWithoutDollar)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "addProduct",
        onSubmit: this.handleSubmit,
        className: "add-product-form"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "category"
      }, "Category"), /*#__PURE__*/React.createElement("select", {
        name: "category"
      }, productCategories.map(function (_ref3) {
        var id = _ref3.id,
            name = _ref3.name;
        return /*#__PURE__*/React.createElement("option", {
          id: id,
          value: name
        }, name);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "price"
      }, "Price Per Unit"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        value: this.state.price,
        onChange: this.handlePriceChange
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "name"
      }, "Product Name"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name"
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "imageUrl"
      }, "Image URL"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "imageUrl"
      })), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "submit-button submit-button-dark"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);

var ProductList = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductList, _React$Component2);

  var _super2 = _createSuper(ProductList);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _super2.call(this);
    _this2.state = {
      products: initialProducts
    };
    _this2.addProduct = _this2.addProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      this.setState({
        products: initialProducts
      });
    }
  }, {
    key: "addProduct",
    value: function addProduct(product) {
      product.id = this.state.products.length + 1;
      this.setState({
        products: [].concat(_toConsumableArray(this.state.products), [product])
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "root-container"
      }, /*#__PURE__*/React.createElement("h2", null, "My Company Inventory"), /*#__PURE__*/React.createElement("div", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
        headings: productTableHeadings,
        products: this.state.products
      }), /*#__PURE__*/React.createElement("div", null, "Add a new Product"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
        addProduct: this.addProduct
      }));
    }
  }]);

  return ProductList;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(ProductList, null), document.getElementById('root'));