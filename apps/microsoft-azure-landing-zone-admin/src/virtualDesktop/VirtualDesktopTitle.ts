import { VirtualDesktop as TVirtualDesktop } from "../api/virtualDesktop/VirtualDesktop";

export const VIRTUALDESKTOP_TITLE_FIELD = "name";

export const VirtualDesktopTitle = (record: TVirtualDesktop): string => {
  return record.name?.toString() || String(record.id);
};
