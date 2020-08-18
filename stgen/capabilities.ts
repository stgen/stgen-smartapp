/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as stgen from '@stgen/stgen';
import * as st from '@smartthings/core-sdk';

export namespace Actuator {
  export namespace v1 {
    /**
     * Status type for Actuator v1
     * @deprecated Capability status is deprecated
     */
    export interface Status {}
    /**
     * Rich client for Actuator v1
     * @deprecated Capability status is deprecated
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {},
          commands: {},
          id: 'actuator',
          name: 'Actuator',
          status: 'deprecated',
          version: 1,
        } as unknown) as st.Capability);
      }
    }
  }
}
export namespace Configuration {
  export namespace v1 {
    /**
     * Status type for Configuration v1
     *
     */
    export interface Status {}
    /**
     * Rich client for Configuration v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {},
          commands: { configure: { arguments: [] } },
          id: 'configuration',
          name: 'Configuration',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "configure" for this capability
       */
      configure(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'configure',
          arguments: [],
        });
      }
    }
  }
}
export namespace Healthcheck {
  export namespace v1 {
    /**
     * Status type for Health Check v1
     *
     */
    export interface Status {
      'DeviceWatch-DeviceStatus': {
        value: 'online' | 'offline';
        data?: {
          /**
           * {}
           */
          badProperty?: string;
          /**
           * {}
           */
          deviceScheme?: 'MIXED' | 'TRACKED' | 'UNTRACKED';
        };
      };
      'DeviceWatch-Enroll': {
        value: {
          /**
           * {"maxLength":255,"title":"String"}
           */
          hubHardwareId?: string;
          /**
           * {"title":"DeviceHealthProtocol"}
           */
          protocol?:
            | 'zigbee'
            | 'zwave'
            | 'bluetooth'
            | 'lan'
            | 'cloud'
            | 'unknown'
            | 'ocf'
            | 'mqtt';
          /**
           * {}
           */
          scheme?: 'MIXED' | 'TRACKED' | 'UNTRACKED';
        };
      };
      checkInterval: {
        value: number;
        unit?: 's';
        data?: {
          /**
           * {}
           */
          badProperty?: string;
          /**
           * {}
           */
          deviceScheme?: 'MIXED' | 'TRACKED' | 'UNTRACKED';
          /**
           * {"pattern":"^[0-9a-fA-F]{4}$"}
           */
          hubHardwareId?: string;
          /**
           * {}
           */
          offlinePingable?: '0' | '1';
          /**
           * {"title":"DeviceHealthProtocol"}
           */
          protocol?:
            | 'zigbee'
            | 'zwave'
            | 'bluetooth'
            | 'lan'
            | 'cloud'
            | 'unknown'
            | 'ocf'
            | 'mqtt';
        };
      };
      healthStatus: {
        value: 'online' | 'offline';
        data?: {
          /**
           * {}
           */
          badProperty?: string;
          /**
           * {}
           */
          deviceScheme?: 'MIXED' | 'TRACKED' | 'UNTRACKED';
        };
      };
    }
    /**
     * Rich client for Health Check v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {
            'DeviceWatch-DeviceStatus': {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  data: {
                    additionalProperties: false,
                    properties: {
                      badProperty: { type: 'string' },
                      deviceScheme: { enum: ['MIXED', 'TRACKED', 'UNTRACKED'], type: 'string' },
                    },
                    required: [],
                    type: 'object',
                  },
                  value: { enum: ['online', 'offline'], type: 'string' },
                },
                required: ['value'],
                type: 'object',
              },
            },
            'DeviceWatch-Enroll': {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  value: {
                    additionalProperties: false,
                    properties: {
                      hubHardwareId: { maxLength: 255, title: 'String', type: 'string' },
                      protocol: {
                        enum: [
                          'zigbee',
                          'zwave',
                          'bluetooth',
                          'lan',
                          'cloud',
                          'unknown',
                          'ocf',
                          'mqtt',
                        ],
                        title: 'DeviceHealthProtocol',
                        type: 'string',
                      },
                      scheme: { enum: ['MIXED', 'TRACKED', 'UNTRACKED'], type: 'string' },
                    },
                    title: 'DeviceHealthEnroll',
                    type: 'object',
                  },
                },
                required: ['value'],
                type: 'object',
              },
            },
            checkInterval: {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  data: {
                    additionalProperties: false,
                    properties: {
                      badProperty: { type: 'string' },
                      deviceScheme: { enum: ['MIXED', 'TRACKED', 'UNTRACKED'], type: 'string' },
                      hubHardwareId: { pattern: '^[0-9a-fA-F]{4}$', type: 'string' },
                      offlinePingable: { enum: ['0', '1'], type: 'string' },
                      protocol: {
                        enum: [
                          'zigbee',
                          'zwave',
                          'bluetooth',
                          'lan',
                          'cloud',
                          'unknown',
                          'ocf',
                          'mqtt',
                        ],
                        title: 'DeviceHealthProtocol',
                        type: 'string',
                      },
                    },
                    required: [],
                    type: 'object',
                  },
                  unit: { default: 's', enum: ['s'], type: 'string' },
                  value: { maximum: 604800, minimum: 0, type: 'integer' },
                },
                required: ['value'],
                type: 'object',
              },
            },
            healthStatus: {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  data: {
                    additionalProperties: false,
                    properties: {
                      badProperty: { type: 'string' },
                      deviceScheme: { enum: ['MIXED', 'TRACKED', 'UNTRACKED'], type: 'string' },
                    },
                    required: [],
                    type: 'object',
                  },
                  value: { enum: ['online', 'offline'], type: 'string' },
                },
                required: ['value'],
                type: 'object',
              },
            },
          },
          commands: { ping: { arguments: [] } },
          id: 'healthCheck',
          name: 'Health Check',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "ping" for this capability
       */
      ping(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'ping',
          arguments: [],
        });
      }
    }
  }
}
export namespace Refresh {
  export namespace v1 {
    /**
     * Status type for Refresh v1
     *
     */
    export interface Status {}
    /**
     * Rich client for Refresh v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {},
          commands: { refresh: { arguments: [] } },
          id: 'refresh',
          name: 'Refresh',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "refresh" for this capability
       */
      refresh(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'refresh',
          arguments: [],
        });
      }
    }
  }
}
export namespace Relayswitch {
  export namespace v1 {
    /**
     * Status type for Relay Switch v1
     * @deprecated Capability status is deprecated
     */
    export interface Status {
      switch: { value: 'on' | 'off' };
    }
    /**
     * Rich client for Relay Switch v1
     * @deprecated Capability status is deprecated
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {
            switch: {
              enumCommands: [
                { command: 'on', value: 'on' },
                { command: 'off', value: 'off' },
              ],
              schema: {
                additionalProperties: false,
                properties: {
                  value: { enum: ['on', 'off'], title: 'SwitchState', type: 'string' },
                },
                required: ['value'],
                type: 'object',
              },
            },
          },
          commands: { off: { arguments: [] }, on: { arguments: [] } },
          id: 'relaySwitch',
          name: 'Relay Switch',
          status: 'deprecated',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "off" for this capability
       */
      off(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'off',
          arguments: [],
        });
      }

      /**
       * Executes "on" for this capability
       */
      on(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'on',
          arguments: [],
        });
      }
    }
  }
}
export namespace Sensor {
  export namespace v1 {
    /**
     * Status type for Sensor v1
     * @deprecated Capability status is deprecated
     */
    export interface Status {}
    /**
     * Rich client for Sensor v1
     * @deprecated Capability status is deprecated
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {},
          commands: {},
          id: 'sensor',
          name: 'Sensor',
          status: 'deprecated',
          version: 1,
        } as unknown) as st.Capability);
      }
    }
  }
}
export namespace Switch {
  export namespace v1 {
    /**
     * Status type for Switch v1
     *
     */
    export interface Status {
      switch: { value: 'on' | 'off' };
    }
    /**
     * Rich client for Switch v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {
            switch: {
              enumCommands: [
                { command: 'on', value: 'on' },
                { command: 'off', value: 'off' },
              ],
              schema: {
                additionalProperties: false,
                properties: {
                  value: { enum: ['on', 'off'], title: 'SwitchState', type: 'string' },
                },
                required: ['value'],
                type: 'object',
              },
            },
          },
          commands: { off: { arguments: [] }, on: { arguments: [] } },
          id: 'switch',
          name: 'Switch',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "off" for this capability
       */
      off(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'off',
          arguments: [],
        });
      }

      /**
       * Executes "on" for this capability
       */
      on(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'on',
          arguments: [],
        });
      }
    }
  }
}
export namespace Switchlevel {
  export namespace v1 {
    /**
     * Status type for Switch Level v1
     *
     */
    export interface Status {
      level: { value: number; unit?: '%' };
    }
    /**
     * Rich client for Switch Level v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {
            level: {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  unit: { default: '%', enum: ['%'], type: 'string' },
                  value: { maximum: 100, minimum: 0, type: 'integer' },
                },
                required: ['value'],
                title: 'IntegerPercent',
                type: 'object',
              },
              setter: 'setLevel',
            },
          },
          commands: {
            setLevel: {
              arguments: [
                {
                  name: 'level',
                  optional: false,
                  schema: { maximum: 100, minimum: 0, type: 'integer' },
                },
                {
                  name: 'rate',
                  optional: true,
                  schema: { minimum: 0, title: 'PositiveInteger', type: 'integer' },
                },
              ],
            },
          },
          id: 'switchLevel',
          name: 'Switch Level',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "setLevel" for this capability
       */
      setlevel(level: number, rate?: number): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'setLevel',
          arguments: [level, rate!],
        });
      }
    }
  }
}
export namespace Windowshade {
  export namespace v1 {
    /**
     * Status type for Window Shade v1
     *
     */
    export interface Status {
      supportedWindowShadeCommands: { value?: 'open' | 'close' | 'pause'[] };
      windowShade: {
        value: 'closed' | 'closing' | 'open' | 'opening' | 'partially open' | 'unknown';
      };
    }
    /**
     * Rich client for Window Shade v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {
            supportedWindowShadeCommands: {
              enumCommands: [],
              schema: {
                additionalProperties: false,
                properties: {
                  value: {
                    items: { enum: ['open', 'close', 'pause'], type: 'string' },
                    type: 'array',
                  },
                },
                required: [],
                type: 'object',
              },
            },
            windowShade: {
              enumCommands: [
                { command: 'close', value: 'closed' },
                { command: 'open', value: 'open' },
              ],
              schema: {
                additionalProperties: false,
                properties: {
                  value: {
                    enum: ['closed', 'closing', 'open', 'opening', 'partially open', 'unknown'],
                    title: 'OpenableState',
                    type: 'string',
                  },
                },
                required: ['value'],
                type: 'object',
              },
            },
          },
          commands: { close: { arguments: [] }, open: { arguments: [] }, pause: { arguments: [] } },
          id: 'windowShade',
          name: 'Window Shade',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "close" for this capability
       */
      close(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'close',
          arguments: [],
        });
      }

      /**
       * Executes "open" for this capability
       */
      open(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'open',
          arguments: [],
        });
      }

      /**
       * Executes "pause" for this capability
       */
      pause(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'pause',
          arguments: [],
        });
      }
    }
  }
}
export namespace Windowshadepreset {
  export namespace v1 {
    /**
     * Status type for Window Shade Preset v1
     *
     */
    export interface Status {}
    /**
     * Rich client for Window Shade Preset v1
     *
     */
    export class Capability<
      TComponent extends stgen.Component<unknown, TDevice>,
      TDevice extends stgen.Device<unknown>
    > extends stgen.Capability<Status, TComponent, TDevice> {
      constructor(component: TComponent) {
        super(component, ({
          attributes: {},
          commands: { presetPosition: { arguments: [] } },
          id: 'windowShadePreset',
          name: 'Window Shade Preset',
          status: 'live',
          version: 1,
        } as unknown) as st.Capability);
      }

      /**
       * Executes "presetPosition" for this capability
       */
      presetposition(): Promise<st.Status> {
        return this.client.devices.executeCommand(this.device.id, {
          component: this.component.id,
          capability: this.id,
          command: 'presetPosition',
          arguments: [],
        });
      }
    }
  }
}
