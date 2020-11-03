/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as stgen from '@stgen/stgen';
import * as capabilities from './capabilities';
import * as st from '@smartthings/core-sdk';

/**
 * Gets a device client for "Roomless Virtual Switch"
 *
 * @param client a SmartThingsClient.  If none is provided, uses the default set using {@link module:stgen.setDefaultClient}
 */
export function roomlessVirtualSwitch(client?: st.SmartThingsClient): RoomlessVirtualSwitch.Device {
  return new RoomlessVirtualSwitch.Device(client ?? stgen.getDefaultClient());
}
export namespace RoomlessVirtualSwitch {
  export interface Status {
    components: {
      main: Components.Main.Status;
    };
  }
  export class Device extends stgen.Device<Status> {
    constructor(client: st.SmartThingsClient) {
      super(client, ({
        components: [
          {
            capabilities: [
              { id: 'switch', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'actuator', version: 1 },
              { id: 'relaySwitch', version: 1 },
              { id: 'healthCheck', version: 1 },
            ],
            categories: [{ name: 'Switch' }],
            id: 'main',
          },
        ],
        deviceId: '0eac01e2-57cc-4665-a26d-860e5f8cf891',
        deviceNetworkType: 'UNKNOWN',
        deviceTypeId: 'c5b2dbad-73cb-4e12-bf41-f08742e8e560',
        deviceTypeName: 'Simulated Switch',
        dth: {
          completedSetup: false,
          deviceNetworkType: 'UNKNOWN',
          deviceTypeId: 'c5b2dbad-73cb-4e12-bf41-f08742e8e560',
          deviceTypeName: 'Simulated Switch',
          executingLocally: false,
          networkSecurityLevel: 'UNKNOWN',
        },
        label: 'Roomless Virtual Switch',
        locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
        manufacturerName: 'SmartThings',
        name: 'Roomless Virtual Switch',
        presentationId: 'generic-switch',
        restrictionTier: 0,
        type: 'DTH',
      } as unknown) as st.Device);
    }

    /**
     * Component client for "main"
     */
    readonly main = new Components.Main.Component(this);
  }
  export namespace Components {
    export namespace Main {
      export interface Status {
        actuator: capabilities.Actuator.v1.Status;
        healthCheck: capabilities.Healthcheck.v1.Status;
        relaySwitch: capabilities.Relayswitch.v1.Status;
        sensor: capabilities.Sensor.v1.Status;
        switch: capabilities.Switch.v1.Status;
      }
      export class Component extends stgen.Component<Status, Device> {
        constructor(device: Device) {
          super(device, ({
            capabilities: [
              { id: 'actuator', version: 1 },
              { id: 'healthCheck', version: 1 },
              { id: 'relaySwitch', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'switch', version: 1 },
            ],
            categories: [{ name: 'Switch' }],
            id: 'main',
          } as unknown) as st.Component);
        }

        /**
         * Capability client for "actuator"
         */
        readonly actuator = new capabilities.Actuator.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "healthCheck"
         */
        readonly healthcheck = new capabilities.Healthcheck.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "relaySwitch"
         */
        readonly relayswitch = new capabilities.Relayswitch.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "sensor"
         */
        readonly sensor = new capabilities.Sensor.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "switch"
         */
        readonly switch = new capabilities.Switch.v1.Capability<Component, Device>(this);
      }
    }
  }
}

/**
 * Gets a device client for "Virtual Dimmer"
 *
 * @param client a SmartThingsClient.  If none is provided, uses the default set using {@link module:stgen.setDefaultClient}
 */
export function virtualDimmer(client?: st.SmartThingsClient): VirtualDimmer.Device {
  return new VirtualDimmer.Device(client ?? stgen.getDefaultClient());
}
export namespace VirtualDimmer {
  export interface Status {
    components: {
      main: Components.Main.Status;
    };
  }
  export class Device extends stgen.Device<Status> {
    constructor(client: st.SmartThingsClient) {
      super(client, ({
        components: [
          {
            capabilities: [
              { id: 'switch', version: 1 },
              { id: 'configuration', version: 1 },
              { id: 'switchLevel', version: 1 },
              { id: 'refresh', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'actuator', version: 1 },
              { id: 'healthCheck', version: 1 },
            ],
            categories: [{ name: 'Light' }],
            id: 'main',
          },
        ],
        deviceId: 'a62489ff-ec90-47bc-9a71-119fd5b0bc0f',
        deviceNetworkType: 'UNKNOWN',
        deviceTypeId: '504755f1-c94d-49f2-ace9-46d63284c719',
        deviceTypeName: 'Simulated Dimmer Switch',
        dth: {
          completedSetup: false,
          deviceNetworkType: 'UNKNOWN',
          deviceTypeId: '504755f1-c94d-49f2-ace9-46d63284c719',
          deviceTypeName: 'Simulated Dimmer Switch',
          executingLocally: false,
          networkSecurityLevel: 'UNKNOWN',
        },
        label: 'Virtual Dimmer',
        locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
        manufacturerName: 'SmartThings',
        name: 'Virtual Dimmer',
        presentationId: 'generic-dimmer',
        restrictionTier: 0,
        roomId: 'dcd37c67-296c-4533-a675-1caf42332d92',
        type: 'DTH',
      } as unknown) as st.Device);
    }

    /**
     * Component client for "main"
     */
    readonly main = new Components.Main.Component(this);
  }
  export namespace Components {
    export namespace Main {
      export interface Status {
        actuator: capabilities.Actuator.v1.Status;
        configuration: capabilities.Configuration.v1.Status;
        healthCheck: capabilities.Healthcheck.v1.Status;
        refresh: capabilities.Refresh.v1.Status;
        sensor: capabilities.Sensor.v1.Status;
        switch: capabilities.Switch.v1.Status;
        switchLevel: capabilities.Switchlevel.v1.Status;
      }
      export class Component extends stgen.Component<Status, Device> {
        constructor(device: Device) {
          super(device, ({
            capabilities: [
              { id: 'actuator', version: 1 },
              { id: 'configuration', version: 1 },
              { id: 'healthCheck', version: 1 },
              { id: 'refresh', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'switch', version: 1 },
              { id: 'switchLevel', version: 1 },
            ],
            categories: [{ name: 'Light' }],
            id: 'main',
          } as unknown) as st.Component);
        }

        /**
         * Capability client for "actuator"
         */
        readonly actuator = new capabilities.Actuator.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "configuration"
         */
        readonly configuration = new capabilities.Configuration.v1.Capability<Component, Device>(
          this
        );

        /**
         * Capability client for "healthCheck"
         */
        readonly healthcheck = new capabilities.Healthcheck.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "refresh"
         */
        readonly refresh = new capabilities.Refresh.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "sensor"
         */
        readonly sensor = new capabilities.Sensor.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "switch"
         */
        readonly switch = new capabilities.Switch.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "switchLevel"
         */
        readonly switchlevel = new capabilities.Switchlevel.v1.Capability<Component, Device>(this);
      }
    }
  }
}

/**
 * Gets a device client for "Virtual Switch"
 *
 * @param client a SmartThingsClient.  If none is provided, uses the default set using {@link module:stgen.setDefaultClient}
 */
export function virtualSwitch(client?: st.SmartThingsClient): VirtualSwitch.Device {
  return new VirtualSwitch.Device(client ?? stgen.getDefaultClient());
}
export namespace VirtualSwitch {
  export interface Status {
    components: {
      main: Components.Main.Status;
    };
  }
  export class Device extends stgen.Device<Status> {
    constructor(client: st.SmartThingsClient) {
      super(client, ({
        components: [
          {
            capabilities: [
              { id: 'switch', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'actuator', version: 1 },
              { id: 'relaySwitch', version: 1 },
              { id: 'healthCheck', version: 1 },
            ],
            categories: [{ name: 'Switch' }],
            id: 'main',
          },
        ],
        deviceId: '1dde1362-3744-4a33-a4ce-7bc4fd4f20d2',
        deviceNetworkType: 'UNKNOWN',
        deviceTypeId: 'c5b2dbad-73cb-4e12-bf41-f08742e8e560',
        deviceTypeName: 'Simulated Switch',
        dth: {
          completedSetup: false,
          deviceNetworkType: 'UNKNOWN',
          deviceTypeId: 'c5b2dbad-73cb-4e12-bf41-f08742e8e560',
          deviceTypeName: 'Simulated Switch',
          executingLocally: false,
          networkSecurityLevel: 'UNKNOWN',
        },
        label: 'Virtual Switch',
        locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
        manufacturerName: 'SmartThings',
        name: 'Virtual Switch',
        presentationId: 'generic-switch',
        restrictionTier: 0,
        roomId: 'dcd37c67-296c-4533-a675-1caf42332d92',
        type: 'DTH',
      } as unknown) as st.Device);
    }

    /**
     * Component client for "main"
     */
    readonly main = new Components.Main.Component(this);
  }
  export namespace Components {
    export namespace Main {
      export interface Status {
        actuator: capabilities.Actuator.v1.Status;
        healthCheck: capabilities.Healthcheck.v1.Status;
        relaySwitch: capabilities.Relayswitch.v1.Status;
        sensor: capabilities.Sensor.v1.Status;
        switch: capabilities.Switch.v1.Status;
      }
      export class Component extends stgen.Component<Status, Device> {
        constructor(device: Device) {
          super(device, ({
            capabilities: [
              { id: 'actuator', version: 1 },
              { id: 'healthCheck', version: 1 },
              { id: 'relaySwitch', version: 1 },
              { id: 'sensor', version: 1 },
              { id: 'switch', version: 1 },
            ],
            categories: [{ name: 'Switch' }],
            id: 'main',
          } as unknown) as st.Component);
        }

        /**
         * Capability client for "actuator"
         */
        readonly actuator = new capabilities.Actuator.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "healthCheck"
         */
        readonly healthcheck = new capabilities.Healthcheck.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "relaySwitch"
         */
        readonly relayswitch = new capabilities.Relayswitch.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "sensor"
         */
        readonly sensor = new capabilities.Sensor.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "switch"
         */
        readonly switch = new capabilities.Switch.v1.Capability<Component, Device>(this);
      }
    }
  }
}

/**
 * Gets a device client for "Virtual Window Shade"
 *
 * @param client a SmartThingsClient.  If none is provided, uses the default set using {@link module:stgen.setDefaultClient}
 */
export function virtualWindowShade(client?: st.SmartThingsClient): VirtualWindowShade.Device {
  return new VirtualWindowShade.Device(client ?? stgen.getDefaultClient());
}
export namespace VirtualWindowShade {
  export interface Status {
    components: {
      main: Components.Main.Status;
    };
  }
  export class Device extends stgen.Device<Status> {
    constructor(client: st.SmartThingsClient) {
      super(client, ({
        components: [
          {
            capabilities: [
              { id: 'actuator', version: 1 },
              { id: 'windowShade', version: 1 },
              { id: 'windowShadePreset', version: 1 },
            ],
            categories: [{ name: 'Other' }],
            id: 'main',
          },
        ],
        deviceId: '4864fc11-0d5e-4d4f-a961-4edee8a32e6c',
        deviceNetworkType: 'UNKNOWN',
        deviceTypeId: 'fd6e7d7e-4f9f-4dac-b5c7-1241eadeda81',
        deviceTypeName: 'Simulated Window Shade',
        dth: {
          completedSetup: false,
          deviceNetworkType: 'UNKNOWN',
          deviceTypeId: 'fd6e7d7e-4f9f-4dac-b5c7-1241eadeda81',
          deviceTypeName: 'Simulated Window Shade',
          executingLocally: false,
          networkSecurityLevel: 'UNKNOWN',
        },
        label: 'Virtual Window Shade',
        locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
        manufacturerName: 'SmartThings',
        name: 'Virtual Window Shade',
        presentationId: 'generic-window-shade',
        restrictionTier: 0,
        roomId: 'dcd37c67-296c-4533-a675-1caf42332d92',
        type: 'DTH',
      } as unknown) as st.Device);
    }

    /**
     * Component client for "main"
     */
    readonly main = new Components.Main.Component(this);
  }
  export namespace Components {
    export namespace Main {
      export interface Status {
        actuator: capabilities.Actuator.v1.Status;
        windowShade: capabilities.Windowshade.v1.Status;
        windowShadePreset: capabilities.Windowshadepreset.v1.Status;
      }
      export class Component extends stgen.Component<Status, Device> {
        constructor(device: Device) {
          super(device, ({
            capabilities: [
              { id: 'actuator', version: 1 },
              { id: 'windowShade', version: 1 },
              { id: 'windowShadePreset', version: 1 },
            ],
            categories: [{ name: 'Other' }],
            id: 'main',
          } as unknown) as st.Component);
        }

        /**
         * Capability client for "actuator"
         */
        readonly actuator = new capabilities.Actuator.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "windowShade"
         */
        readonly windowshade = new capabilities.Windowshade.v1.Capability<Component, Device>(this);

        /**
         * Capability client for "windowShadePreset"
         */
        readonly windowshadepreset = new capabilities.Windowshadepreset.v1.Capability<
          Component,
          Device
        >(this);
      }
    }
  }
}
