export default interface Props {
  tabs: { title: string; id: string }[];
  activeTabId?: string;
  onTabClick?: (tabId: string) => void;
}
