import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day_06';
  titlebiding = [
    {
      id:1,
      img:"https://product.hstatic.net/200000195489/product/gray_1acc1ce21fce4d0fb1ec1f1b98332636_grande.jpg"
   , name:"MOOD HOODIE ZIP"
      ,  sale:"-5%",
      title:"shibaaaaa",
      price:"300.000Đ"

    },
    {
      id:2,
      img:"https://product.hstatic.net/200000195489/product/z3749363762928_8e5d584b84e5401fbbaccfc4e8840263_db9505a05e7142398452a979976b343f_grande.jpg"
      , name:"MOOD SWEATER MST"
      ,  sale:"-5%",
      title:"shibaaa1",
      price:"300.000Đ"
    },
    {
      id:3,
      img:"https://product.hstatic.net/200000195489/product/green_notext_d78dcbd3562349b0940a4ca38e0cd723_grande.jpg"
      , name:"BASIC MOOD TEE"
      ,  sale:"-10%",
      title:"shibaaa2",
      price:"500.000Đ"
      
    },
    {
      id:4,
      img:"https://product.hstatic.net/200000195489/product/den_co_nen_249319d1c1814ea993f14f02d19a446f_grande.jpg"
      , name:"MOOD BOMBER"
      ,  sale:"-20%",
      title:"shibaaa2",
      price:"299.000Đ"
      
    },
    {
      id:5,
      img:"https://product.hstatic.net/200000195489/product/daisy_tee_truoc_61b3c245f0bc4f9aaacf0cf8e94dc209_grande.png"
      , name:"DAISY FLOWER TEE"
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"340.000Đ"
      
    },
    {
      id:6,
      img:"https://product.hstatic.net/200000195489/product/black_41dd5335b0a942daa23449483119f51b_grande.jpg"
      , name:"BOMBER MST"
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"499.000Đ"
      
    },
    {
      id:7,
      img:"https://product.hstatic.net/200000195489/product/kem_nau_co_nen_acee5b03f2e1434eb040b49d4ea76c05_grande.jpg"
      , name:"MOOD CARDIGAN "
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"549.000Đ"
      
    },
    {
      id:8,
      img:"https://product.hstatic.net/200000195489/product/beige_0a3d0eed3163490094d11c49322945b6_grande.jpg"
      , name:"PLUS TEE MST"
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"299.000Đ"
      
    },
    {
      id:9,
      img:"https://product.hstatic.net/200000195489/product/daisy_swe_truoc_42d042f6c58048ad872bb6278713cbdc_grande.png"
      , name:"DAISY FLOWER SWEATER"
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"455.000Đ"
      
    },
    {
      id:10,
      img:"https://product.hstatic.net/200000195489/product/tulip_kem_tee_notext_95ed36169f2e490087f3426dd6cf7ac4_grande.jpg"
      , name:"TULIP FLOWER TEE"
      ,  sale:"-5%",
      title:"shibaaa2",
      price:"590.000Đ"
      
    }
  ]
  like(id:number){
    console.log(`Click like ${id}`)
  }
  share(id:number){
    console.log(`Share ${id}`)
  }
}
