export type NativeAndroidInvitation = {
  additionalReferralParameters?: { [key: string]: string };
  emailHtmlContent?: string;
  emailSubject?: string;
  googleAnalyticsTrackingId?: string;
};

export type NativeInvitation = {
  android?: NativeAndroidInvitation;
  androidClientId?: string;
  androidMinimumVersionCode?: number;
  callToActionText?: string;
  customImage?: string;
  deepLink?: string;
  iosClientId?: string;
  message: string;
  title: string;
};

export type Invitation = { [key: string]: any };
