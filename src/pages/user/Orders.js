import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import UserContext from "../../context/UserContext";

const Container = styled.div`
  width: 80vw;
  padding: 10px 7.5%;
  margin-left: 3.5rem;
  margin-bottom: 50px;
  @media (max-width: 1100px) {
    width: 90vw;
    margin: 0;
  }
  @media (max-width: 500px) {
    width: 98vw;

    padding: 0 1%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Orders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState();

  useEffect(async () => {
    let response =
      user &&
      (await axios.get(`${process.env.React_APP_BASE_URL}/order/${user?._id}`));
    setOrders(response.data);
  }, [user]);

  return (
    <div div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Menubar />
      <Container>
        <Typography style={{ fontSize: 32 }} noWrap>
          My Orders
        </Typography>
        <InnerContainer>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 900, fontSize: 16 }}>
                    Ordered By
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 900, fontSize: 16 }}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 900, fontSize: 16 }}
                  >
                    Total Products
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 900, fontSize: 16 }}
                  >
                    Total Cost
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 900, fontSize: 16 }}
                  >
                    Order Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        borderRight: "1px solid lightgray",
                        width: "20vw",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        borderRight: "1px solid lightgray",
                        width: "20vw",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        borderRight: "1px solid lightgray",
                        width: "20vw",
                      }}
                    >
                      {row.address}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        borderRight: "1px solid lightgray",
                        width: "20vw",
                      }}
                    >
                      ${row.grandTotal}
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        borderRight: "1px solid lightgray",
                        width: "20vw",
                      }}
                    >
                      {row.status === 0 ? (
                        <>Pending</>
                      ) : row.status === 1 ? (
                        <>Processing</>
                      ) : row.status === 2 ? (
                        <>On Its Way</>
                      ) : row.status === 2 ? (
                        <>Delivered</>
                      ) : (
                        <>Cancelled</>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </InnerContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Orders;
