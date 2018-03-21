import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import * as kjua from 'kjua';

@Component({
  selector: 'app-donation-link',
  templateUrl: './donation-link.component.html',
  styleUrls: ['./donation-link.component.css']
})
export class DonationLinkComponent implements OnInit, AfterViewInit {
  currency = 'BTC';
  renderQR = true;
  showSymbol = true;
  address = '1GwicP4cgsDvY1Mm7Mn7kko98FRc6MmGLy';

  // currency: 'BTC',
  // renderQR: true,
  // showSymbol: false,
  // address: '1ViperZUz1UKwNqdVFdkJ175U5dAaEvpR'

  @ViewChild('qrCodeContainer')
  qrCodeContainer;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit( ) {
    this.qrCodeContainer.nativeElement.innerHTML = this.generateQRCode({text: this.address}).outerHTML;
  }

  // https://larsjung.de/kjua/latest/demo/
  generateQRCode(param: { text: string }): any {
    const settings = {
      render: 'image',
      crisp: true,
      minVersion: 1,
      ecLevel: 'H', // error correction level= "L"; "M"; "Q" or "H"
      size: 100,
      ratio: undefined,
      fill: '#000',
      back: '#fff',
      text: param.text,
      rounded: 0, // roundend corners in pc= 0..100
      quiet: 3,
      mode: 'plain', // modes= "plain"; "label" or "image"
      mSize: 4,
      mPosX: 50,
      mPosY: 98,
      label: param.text,
      fontname: 'Verdana',
      fontcolor: '#000',
      image: undefined
    };

    // tslint:disable-next-line:quotemark
    console.log("kjua settings used:", settings);

    return kjua(settings);
  }
}
