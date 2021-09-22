import { Formik, Form } from "formik";
import React, { Fragment } from "react";
import styled from "styled-components";
import { MyTextArea } from "./fields/MyTextArea";
import { MyTextInput } from "./fields/MyTextInput";
import { postData } from "./Feedback";
import SubmitButton from "../../components/buttons/SubmitButton";
import Layout from "../../components/layout/layout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ReactDOM from "react-dom";

// #BUG1: postData error after submitting; need more specific testing here, otherwise can't style the popped up tables afterwards
let resultData = [];
async function fetchStatus(url, orderId) {
  let results = await (await postData(url, orderId)).json()
  createTable(results);
}
function createTable(tableData){
  const element = (
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Part Id</TableCell>
          <TableCell align="left">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          tableData.map((data) => (
                    <TableRow
                        key={data.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{data.partNumber}</TableCell>
                      <TableCell align="left">{data.status}</TableCell>
                    </TableRow>
                ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
  console.log('111');
  ReactDOM.render(element, document.getElementById('table'));
}

export default function Track() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <Formik
            initialValues={{
              ordernum: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              //alert(JSON.stringify(values, null, 2));
              await fetchStatus("../Status.php", values)
              //await fetchStatus("http://localhost:8080/comp8715/optofab-website/src/api/Status.php", values)
              console.log(resultData);
            }}
          >
            <Form>
              <FormWrapper>
                <InputWrapper>
                  <img src="/images/smallicons/chat.svg" />
                  <MyTextInput
                    label=""
                    name="ordernum"
                    placeholder="Enter the order number here"
                  />
                </InputWrapper>
                {/* <button type="submit">Submit</button> */}
                <SubmitButton title="TRACK" />
              </FormWrapper>
            </Form>
          </Formik>
          <br />
          <div id='table'></div>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(135deg, #1a2151 10%, #eb7776 90%);
  display: grid;
  place-items: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  height: 1080px;
  margin: 0 auto;
  padding: 200px 30px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 28px auto;
  align-items: center;
  padding: 10px;
  width: 360px;
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  /* drop shadow combo 1 */
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 380px auto;
  align-items: center;
`;
