import { NextPage } from "next";
import {Button, Result} from "antd";

interface Props {
  statusCode?: number;
}

const Custom404: NextPage<Props> = () => {

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<a href={"/"}><Button type="primary">Back Home</Button></a>}
    />
  );
};

export default Custom404;
