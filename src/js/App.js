// import { hot } from 'react-hot-loader/root';
import React from 'react';
import '../scss/styles.scss';
import Row from './Layout/Row';
import Layout from './Layout/layout';
import Col from './Layout/Column';
import Grid from './Layout/Grid';
import Container from './Layout/Container';
// import Link from "./components/Link";
// import Divider from "./components/Divider";
import Button from './components/button/Button';
// import Image from './components/Image';
import Heading from './components/Heading';
import Text from './components/Text';
// import Video from "./components/Video"
import Input from './components/Form/Inputs/Input';
import Checkbox from './components/Form/Inputs/Checkbox';
import Radio from './components/Form/Inputs/Radio';
import ColorPicker from './components/Form/Inputs/ColorPicker';
import DateSelect from './components/Form/Inputs/DatePicker';
import Tel from './components/Form/Inputs/Tel';
import Select from './components/Form/Inputs/Select';
import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import Progress from './components/Progress';
import Modal from './components/Modal';
import Sticky from './components/Sticky';
import PageProgress from './components/PageProgress';
import MasonryGrid from './Layout/masonry-grid/MasonryGrid';
import Slider from './components/Slider';
import Cart from './Layout/Store/Cart/Cart';
import Products from './Layout/Store/Products';
import StoreProvider from './Layout/Store/Context/StoreProvider';
import Checkout from './Layout/Store/Cart/Checkout';

const App = () => (
  <Layout>
    <Container>
      <Grid>
        <Row>
          <Col width={6}>
            <Heading heading="h1">Heading 1</Heading>
            <Heading heading="h2">Heading 2</Heading>
            <Heading heading="h3">Heading 3</Heading>
            <Heading heading="h4">Heading 4</Heading>
            <Heading heading="h5">Heading 5</Heading>
            <Heading heading="h6">Heading 6</Heading>
            <Heading heading="p">Heading P</Heading>
          </Col>
          <Col width={6}>
            <Text>
              <ul>
                <li>Heading P</li>
                <li>Heading P</li>
                <li>Heading P</li>
                <li>Heading P</li>
              </ul>
            </Text>
          </Col>
        </Row>

        <Row>
          <Col width={12}>
            <Heading underlined heading="h1">
              Buttons
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col width={4}>
            <Heading heading="h2">Large Buttons</Heading>
            <Button width="50%" primary to={'/'}>
              Primary
            </Button>
            <Button width="50%" primary disabled to={'/'}>
              Primary Disabled
            </Button>
            <Button width="50%" primary light to={'/'}>
              Primary Light
            </Button>
            <Button width="50%" primary disabled light to={'/'}>
              Light Disabled
            </Button>
            <Button width="50%" primary inverse to={'/'}>
              Primary Inverse
            </Button>
            <Button width="50%" primary disabled inverse to={'/'}>
              Inverse Disabled
            </Button>
            <Button width="50%" primary to={'/'}>
              With Icon
            </Button>
            <Button width="50%" primary disabled to={'/'}>
              With Icon Disabled
            </Button>
          </Col>
          <Col width={4}>
            <Heading heading="h2">Small Buttons</Heading>
            <Button width="50%" small primary to={'/'}>
              Small Primary
            </Button>
            <Button width="50%" small primary disabled to={'/'}>
              Small Primary
            </Button>
            <Button width="50%" small primary light to={'/'}>
              Small Primary Light
            </Button>
            <Button width="50%" small primary disabled light to={'/'}>
              {' '}
              Disabled
            </Button>
            <Button width="50%" small primary inverse to={'/'}>
              Small Primary Inverse
            </Button>
            <Button width="50%" small primary disabled inverse to={'/'}>
              Disabled
            </Button>
            <Button width="50%" small primary to={'/'}>
              With Icon
            </Button>
            <Button width="50%" small primary disabled to={'/'}>
              With Icon Disabled
            </Button>
          </Col>
          <Col width={4}>
            <Heading heading="h2">Other Buttons</Heading>
            <Button primary to={'/'}>
              Primary
            </Button>
            <Button primary disabled to={'/'}>
              Primary
            </Button>
            <Button primary light to={'/'}>
              Primary Light
            </Button>
            <Button primary disabled light to={'/'}>
              Primary Light
            </Button>
            <Button primary inverse to={'/'}>
              Primary Inverse
            </Button>
            <Button primary disabled inverse to={'/'}>
              Primary Inverse
            </Button>
            <Button primary to={'/'}>
              With Icon
            </Button>
            <Button primary disabled to={'/'}>
              With Icon
            </Button>
          </Col>
        </Row>
        <Row>
          <Col width={12}>
            <Heading underlined heading="h1">
              Form fields
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col width={4}>
            <Heading heading="h2">Normal Inputs</Heading>
            <Input type="email" placeholder="Email placeholder" />
            <Input type="password" placeholder="Password placeholder" />
            <Input type="text" placeholder="Text placeholder" />
            <Input type="email" error="error" placeholder="Email placeholder" />
            <Input type="password" error="error" placeholder="Password placeholder" />
            <Input type="text" error="error" placeholder="Text placeholder" />
          </Col>
          <Col width={4}>
            <Heading heading="h2">Select Inputs</Heading>
            <ColorPicker />
            <Tel />
            <DateSelect />
            <Select searchable multiselect title="Dropdown Select" />
          </Col>
          <Col width={4}>
            <Heading heading="h2">Normal Inputs</Heading>
            <Checkbox label="Checkbox" />
            <Checkbox disabled label="Checkbox" />
            <Checkbox toggle label="Checkbox Toggle" />
            <Checkbox toggle disabled label="Checkbox Toggle Disabled" />
            <Radio name="first" label="Radio Field" />
            <Radio name="first" label="Radio Field" />
            <Radio name="second" disabled label="Radio Field disabled" />
            <Radio name="second" disabled label="Radio Field disabled" />
            <Radio name="third" toggle label="Radio Field Switch" />
            <Radio name="third" toggle label="Radio Field Switch" />
            <Radio name="fourth" toggle disabled label="Radio Field Switch disabled" />
            <Radio name="fourth" toggle disabled label="Radio Field Switch disabled" />
          </Col>
        </Row>
        <Row>
          <Col width={6}>
            <Accordion label="Accordion 1">
              <p>test</p>
            </Accordion>
            <Accordion label="Accordion 2">
              <p>test</p>
            </Accordion>
            <Accordion label="Accordion 3">
              <p>test</p>
            </Accordion>
            <Accordion label="Accordion 4">
              <p>test</p>
            </Accordion>
          </Col>
          <Col width={6}>
            <Tabs selected={1}>
              <div title="first">This is the first panel</div>
              <div title="second">This is the second panel</div>
              <div title="third">This is the third panel</div>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Col width={6}>
            <Progress percent={60} color="blue" />
            <Modal>
              <Heading heading="h4">Heading 4</Heading>
            </Modal>
            <Sticky fixed top right from={100}>
              <Heading heading="h3">this is stick</Heading>
            </Sticky>
            <PageProgress />
          </Col>
          <Col width={6}></Col>
        </Row>
        <Row>
          <Col width={12}>
            <Slider slideCount={1} showCount={3}>
              <div>
                <img src="https://source.unsplash.com/user/erondu" />
              </div>
              <div>
                <img src="https://source.unsplash.com/user/hayleykimdesign" />
              </div>
              <div>
                <img src="https://source.unsplash.com/collection/8469893" />
              </div>
              <div>
                <img src="https://source.unsplash.com/random" />
              </div>
              <div>
                <img src="https://source.unsplash.com/user/jeannerosegomez" />
              </div>
              <div>
                <img src="https://source.unsplash.com/user/osillbury" />
              </div>
              <div>
                <img src="https://source.unsplash.com/collection/1758353" />
              </div>
              <div>
                <img src="https://source.unsplash.com/collection/1118894" />
              </div>
              <div>
                <img src="https://source.unsplash.com/collection/1360971" />
              </div>
            </Slider>
          </Col>
          <Col>
            <StoreProvider>
              <Products />
              <Cart />
              <Checkout />
            </StoreProvider>
          </Col>
        </Row>
      </Grid>

      <MasonryGrid columnsLg={4}>
        <div>Masonry item 1</div>
        <div>Masonry item 2</div>
        <div>Masonry item 3</div>
        <div>Masonry item 4</div>
        <div>Masonry item 5</div>
        <div>Masonry item 6</div>
        <div>Masonry item 7</div>
        <div>Masonry item 8</div>
        <div>Masonry item 9</div>
        <div>Masonry item 10</div>
        <div>Masonry item 11</div>
      </MasonryGrid>
    </Container>
  </Layout>
);

export default App;
