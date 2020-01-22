import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SiteFooterComponent } from './siteFooter/site-footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeProductsComponent } from './products/home-products.component';
import { CategoryThumbnailComponent } from './products/category-thumbnail/category-thumbnail.component';
import { TestimonialComponent } from './products/testimonial/testimonial.component';
import { NewsletterSubscriptionComponent } from './products/newsletter-subscription/newsletter-subscription.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReturnPolicyPageComponent } from './return-policy-page/return-policy-page.component';
import { TermAndConditionsPageComponent } from './term-and-conditions-page/term-and-conditions-page.component';
import { SharedProductListsComponent } from './common/shared-product-lists/shared-product-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteFooterComponent,
    NavBarComponent,
    HomeProductsComponent,
    CategoryThumbnailComponent,
    SharedProductListsComponent,
    TestimonialComponent,
    NewsletterSubscriptionComponent,
    PrivacyPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ContactPageComponent,
    ShopPageComponent,
    AboutPageComponent,
    ReturnPolicyPageComponent,
    TermAndConditionsPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
