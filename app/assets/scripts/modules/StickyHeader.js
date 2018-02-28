import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class StickyHeader{
  constructor(){
    this.siteHeader=$(".site-header");
  }
  createHeaderWayPoint(){
    new Waypoint({
      element:x,
      handler:x
    });
  }
}
export default StickyHeader;
