import { useState } from "react";
import WithdrawDialog from "./WithdrawDialog";
import { useGetBalance } from "../../hooks/useGetBalance";
import { useConnectionContext } from "../../context/ConnectionContext";

export const Balance = () => {
  const { account } = useConnectionContext();
  const [openDialog, setOpenDialog] = useState(false);
  const { data, error } = useGetBalance(account); // @TODO handle on error
  const hasBalance = data && data > 0;
  const manageWithdraw = (open: boolean) => {
    setOpenDialog(open);
  };
  return (
    <div>
      Balance<span className="ml-1 hidden md:inline-block">(ETH)</span>: {data}
      {hasBalance ? (
        <button onClick={() => manageWithdraw(true)}>Withdraw</button>
      ) : null}
      <WithdrawDialog isOpen={openDialog} handler={manageWithdraw} />
    </div>
  );
};
