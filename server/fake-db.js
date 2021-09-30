const Product = require('./modle/product')


class FakeDb{
    constructor(){
        this.products =[
            {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone XL',
                price:799,
                description:'A large phone with one of the best screens',
                heding1:'サンプルテキスト1',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
              },
            
              {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone Mini',
                price:799,
                description:'A large phone with one of the best screens',
                heding1:'サンプルテキスト1',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
              },
            
              {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone Standard',
                price:799,
                description:'A large phone with one of the best screens',
                heding1:'サンプルテキスト1',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
              },
            
              {
                coverimage:'./assets/img/phone-cover.jpg',
                name:'Phone special',
                price:799,
                description:'A large phone with one of the best screens',
                heding1:'サンプルテキスト1',
                heding2:'サンプルテキスト2',
                heding3:'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章　テキスト文章',
                headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
              }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb( ){
        await Product.deleteMany({})
    }
    pushProductsToDb(){
        this.products.forEach(
            (product)=>{
                const newProduct =new Product(product)
                newProduct.save()
            }
        )
    }
    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports =FakeDb