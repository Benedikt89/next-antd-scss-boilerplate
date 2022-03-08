import React, {useEffect, useMemo} from "react";
import {Rate, Skeleton, Spin} from "antd";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useTranslations} from "next-intl";

import {ClockCircleFilled, EnvironmentFilled} from "@ant-design/icons";
import {selectBusinessInfo} from "@Redux/business/selectors";
import {selectLoadingByKey} from "@Redux/app/selectors";
import {getBusiness} from "@Redux/business/actions";

import s from "@Features/business/businessInfo.module.scss";

const BusinessInfo: React.FC = () => {
  const {query: {slug}} = useRouter();
  const t = useTranslations('business');

  const businessId: string = useMemo(() => !Array.isArray(slug) ? slug : "", [])
  const business = useSelector(selectBusinessInfo);
  const loading = useSelector((state) => selectLoadingByKey(state, `getBusiness=${businessId}`));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusiness(businessId));
  }, [dispatch, businessId]);

  return (
    <>
      <Head>
        <title>{business?.title ?? "...Loading"}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Spin spinning={loading}>
        <div>
          {business ? (
            <div className={s.rateWrapper}>
              <span className={s.rateText}>{business.rate}</span>
              <Rate allowHalf defaultValue={business.rate} disabled style={{ fontSize: 36 }}/>
              <div className={s.rateReviews}>{`${business.reviewsCount} ${t("reviews")}`}</div>
            </div>
          ) : <Skeleton paragraph={{style: {display: "none"}}} title={{width: 350, style: {height: 35, margin: 0}}}/>}

          <div className={s.contentWrapper}>
            <div>
              <div className={s.banner}>
                {business ? (
                  <>
                    <img src={business.cover ?? "/banner.png"} alt="cover"/>
                    <img src={"/cover-text.png"} className={s.text} alt=""/>
                  </>
                ) : <Skeleton paragraph={{style: {display: "none"}}}
                              title={{width: "100%", style: {height: 350, margin: "0"}}}/>}
              </div>
              <div className={s.detailsWrapper}>
                <div>
                  {business ? (
                    <div className={s.detailsRow}>
                      <EnvironmentFilled/>
                      <span>{business.address}</span>
                    </div>
                  ) : <Skeleton paragraph={{style: {display: "none"}}} title={{width: 200, style: {margin: 0}}}/>}
                  {business ? (
                    <div className={s.detailsRow}>
                      <ClockCircleFilled/>
                      <span>
                      {`${t("open_today")}: ${moment(business.openAt).format("HH:mm")} - ${
                        moment(business.closeAt).format("HH:mm")
                      }`}
                      </span>
                    </div>
                  ) : <Skeleton paragraph={{style: {display: "none"}}} title={{width: 200, style: {margin: 0}}}/>}
                </div>
                <div>
                  {business ? (
                    <div className={classNames(s.detailsRow, s.right)}>
                      {business.phone}
                    </div>
                  ) : <Skeleton paragraph={{style: {display: "none"}}} title={{width: 200, style: {margin: 0}}}/>}
                  {business ? (
                    <div className={classNames(s.detailsRow, s.right)}>
                      {business.homePage}
                    </div>
                  ) : <Skeleton paragraph={{style: {display: "none"}}} title={{width: 200, style: {margin: 0}}}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  )
}

export default BusinessInfo;