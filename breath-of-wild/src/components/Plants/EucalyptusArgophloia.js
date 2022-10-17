import React, { Component } from 'react';
import { Card, Avatar, Space, Button, Typography } from '@douyinfe/semi-ui';
import { Collapse } from '@douyinfe/semi-ui';

export default class EucalyptusArgophloia extends Component {
  
  render() {
    const { Meta } = Card;
    const { Text } = Typography;
    let icon = require("../../../../breath-of-wild/src/assets/images/plantIcon/EucalyptusArgophloia.png");
    let background = require("../../../../breath-of-wild/src/assets/images/plantImage/EucalyptusArgophloia.PNG");
    let text = 'Jacaranda mimosifolia is regarded as an invasive species in parts of South Africa and Queensland, Australia, where it can out-compete native species. It can form thickets of seedlings beneath planted trees from which the species may expand and exclude other vegetation., Jacaranda (Jacaranda mimosifolia) is regarded as an environmental weed in New South Wales and Queensland. Though this species has been widely and commonly cultivated throughout Australia for many years, it was first recorded as becoming naturalised in Queensland in 1987. It has spread from cultivation into nearby open woodlands and grasslands, particularly on creekbanks and near waterways., Jacaranda (Jacaranda mimosifolia) was recently ranked among the top 200 most important environmental weeds in south-eastern Queensland. It appears on numerous local environmental weed lists in this region (e.g. in Ipswich City, Redland Shire and Caboolture Shire) and has been recorded in eucalypt forest on the Gold Coast., This species is also widely regarded as an environmental weed in north-eastern New South Wales (e.g. in the Byron, Lismore and Tweed Shires) and is also seen as a potential environmental weed in the wider Sydney and Blue Mountains region. Though it rarely reaches maturity in these cooler areas, naturalised plants have been reported in grasslands and woodlands in suburban Sydney., Jacaranda mimosifolia is very difficult to control once established. Large trees must be ring-barked or cut down below ground level and any regrowth treated with herbicide. . When using any herbicide always read the label first and follow all instructions and safety requirements. If in doubt consult an expert.';

    return (
      <Card
          style={{ maxWidth: 340 }}
          title={
              <Meta 
                  title="Jacaranda mimosifolia" 
                  description="Brisbane" 
                  avatar={
                      <Avatar 
                          alt='Card meta img'
                          size="default"
                          //src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/card-cover-docs-demo.jpeg"
                          src={icon}
                      />
                  }
              />
          }
          headerExtraContent={
              <Text link="www.baidu.com">
                  More
              </Text>
          }
          cover={ 
              <img 
                  alt="example" 
                  src={background} 
              />
          }
          footerLine={ true }
          footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
          footer={
              <Space>
                  <Button theme='solid' type='primary'>确认</Button>
              </Space>
          }
          
      >
          <Collapse accordion>
        <Collapse.Panel header="check more info" itemKey="1">
            <p>{text} </p>
        </Collapse.Panel>
    </Collapse>
      </Card>
      
      
  );
  }
}