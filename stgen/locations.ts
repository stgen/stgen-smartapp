import * as stgen from "@stgen/stgen";
import * as st from "@smartthings/core-sdk";
import * as devices from "./devices";

export function testHome(client: st.SmartThingsClient) {
  return new TestHome.Location(client);
}
export namespace TestHome {
  export namespace Rooms {
    export class VirtualRoom extends stgen.Room<Location> {
      constructor(location: Location) {
        super(location, {
          backgroundImage: null,
          locationId: "8d9710c4-595f-4260-bcdb-71e1e18045b7",
          name: "Virtual Room",
          roomId: "dcd37c67-296c-4533-a675-1caf42332d92",
        } as any);
      }

      readonly virtualDimmer = devices.virtualDimmer(this.client);

      readonly virtualSwitch = devices.virtualSwitch(this.client);

      readonly virtualWindowShade = devices.virtualWindowShade(this.client);
    }
  }

  export class Location extends stgen.Location {
    constructor(client: st.SmartThingsClient) {
      super(client, {
        additionalProperties: {},
        backgroundImage: null,
        countryCode: "USA",
        latitude: null,
        locale: "en",
        locationId: "8d9710c4-595f-4260-bcdb-71e1e18045b7",
        longitude: null,
        name: "Test Home",
        regionRadius: null,
        temperatureScale: "F",
        timeZoneId: null,
      } as any);
    }

    readonly virtualRoom = new Rooms.VirtualRoom(this);

    readonly noRoomAssigned = {
      roomlessVirtualSwitch: devices.roomlessVirtualSwitch(this.client),
    } as const;
  }
}
