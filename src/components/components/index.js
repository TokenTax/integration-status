import React from "react";
import Skeleton from "./skeleton.js";
import Component from "./component/index.js";
import useDidMount from "../useDidMount.js";

const ComponentList = ({ loading, components }) => {
  const [hasMounted] = useDidMount();

  return !loading || hasMounted ? (
    components?.length > 0 ? (
      components?.map((component) => (
        <Component
          className="bg-blue-500"
          key={component.id}
          component={component}
        />
      ))
    ) : (
      <p>No Components found.</p>
    )
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export default ComponentList;
