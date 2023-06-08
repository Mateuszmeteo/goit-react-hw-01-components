// import React from "react";
import { Profile } from "components/profile";
import user from 'data/user.json'; 
import { Statistics } from "components/statistics";
import data from 'data/data.json';
import { FriendList } from "components/friendList";
import friends from 'data/friends.json';
import { TransactionHistory } from "components/transactionHistory";
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics 
          title="Upload stats" 
          stats={data} />
        <FriendList 
          friends={friends} />
        <TransactionHistory 
          items={transactions} />
    </div>
  );
};
