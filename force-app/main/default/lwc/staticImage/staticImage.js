import { LightningElement } from "lwc";
import USERIMAGE from "@salesforce/resourceUrl/trailhead_logo";
import USERIMAGE1 from "@salesforce/resourceUrl/user_image";
import USERWALKING from "@salesforce/resourceUrl/user_walking";

export default class StaticImage extends LightningElement {
  userImage = USERIMAGE;
  userImage1 = USERIMAGE1;
  user_walking = USERWALKING;
}
