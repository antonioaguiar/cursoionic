import { TabsPage } from './../pages/tabs/tabs';
import { ConfigProvider } from '../providers/config/config';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
 
@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;//= IntroPage; // TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      const configAny = (configProvider.getConfigData() as any);
      const config = JSON.parse(configAny);
 
      console.log("Config.showSlide="+config.showSlide);
 
      if(config == null){
        //console.log("carregando config pela primeira vez");
        this.rootPage = IntroPage;
        configProvider.setConfigData(false); 
      }else{
        if (config.showSlide==false){
          console.log("carregando TabsPage");
          this.rootPage = TabsPage;
        }else{
          console.log("carregando IntroPage");
          this.rootPage = IntroPage;
          configProvider.setConfigData(false); 
        }
      }
    
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
