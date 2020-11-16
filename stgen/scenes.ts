/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
import * as stgen from '@stgen/stgen';
import * as st from '@smartthings/core-sdk';

export function turnOnVirtualSwitch(client: st.SmartThingsClient): TurnOnVirtualSwitch {
  return new TurnOnVirtualSwitch(client);
}
export class TurnOnVirtualSwitch extends stgen.Scene {
  constructor(client: st.SmartThingsClient) {
    super(client, ({
      apiVersion: 'ocfmode',
      createdBy: '804aef6a-fd5d-f6f1-aeac-294147149195',
      editable: false,
      locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
      sceneColor: null,
      sceneIcon: '200',
      sceneId: 'de55254b-679a-41a1-b7ea-7c311c2be214',
      sceneName: 'Turn on Virtual Switch',
    } as unknown) as st.SceneSummary);
  }
}

export function turnOffVirtualSwitch(client: st.SmartThingsClient): TurnOffVirtualSwitch {
  return new TurnOffVirtualSwitch(client);
}
export class TurnOffVirtualSwitch extends stgen.Scene {
  constructor(client: st.SmartThingsClient) {
    super(client, ({
      apiVersion: 'ocfmode',
      createdBy: '804aef6a-fd5d-f6f1-aeac-294147149195',
      editable: false,
      locationId: '8d9710c4-595f-4260-bcdb-71e1e18045b7',
      sceneColor: null,
      sceneIcon: '200',
      sceneId: '55841378-72b1-434e-a408-009daf9afe7b',
      sceneName: 'Turn off Virtual Switch',
    } as unknown) as st.SceneSummary);
  }
}
