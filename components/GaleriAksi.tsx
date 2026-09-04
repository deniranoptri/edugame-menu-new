import React from 'react';

const galeriData = [
  // Foto Paling Baru (Update)
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrWJKTLuZGPmLV2sZcxWtVvjxFUN_Z6eCydftgh8VytxnW3JIT6O_JE2A0X07lwC0AY4GRb1WfgF6i_VuAujePGX89_-6x9iqaJNvb9LYUT3Xrx0THXgz6LUNHZmIJAJ_8JNt5K8j03Qvbb0idmnhAIYzz-7o4XTFArozLdCU2RqTEVEXzXK9ajGwTvI0/s320/WhatsApp%20Image%202026-04-28%20at%2013.00.27%20(2).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUC8yyHs2iWiOMWnPcFaqq47AQuj6gfwmSIg2dGev00NMZcEAuyP9Fvmpr5r_zxOiIjP8Ri41cE4vXxN6RBqKz88VwPlP0xa48Ee9rY9mPr_KDkRGDG06aCbLoSTtB-pQbopyHhCGUgIwVCu0t4ruzzma8rT9evs_ixK8Iyq6lzUrstAlENA8Pv-msWxY/s320/WhatsApp%20Image%202026-04-23%20at%2011.06.37%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjltCsP2v1Hb1HBUEckEeLWB69D497sBXKNa-AvERaJik66Ufvt8fUXNvUj0OXx1OZvq8pHITqsM-S0_GPXoO9CQuODiDxnGI_7u-3FuIJT-fiEBRkSnGdfM-K6AFoh_n9-UUiLQ7JR0nN8PuU-VJ6vAtQU22KUWVt4-tQ36fbLvLPkEDmdWXcwcGqBE-Q/s320/WhatsApp%20Image%202026-04-28%20at%2010.47.59%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKZg1f_lP0MD5SRkMdp-OTxNtEdvuZnYoITcqjgrD0Jmh_gEMJqrYLSOZ-KbpObleOik6pV-2-_lixdAkVaMfqv8nMLqx0dokD2VmdIpMszWgS3PdU_esS8UZiYkDBxEmye3mw57RjZCef9r5IqVo-s18yQY4aJ2A18zv6AJjlwAE1WdpYcSs6iSO0hHA/s320/WhatsApp%20Image%202026-04-28%20at%2011.56.02%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwPIihJFlTG-XCNf9raj6J31e9Jd3OTxg4OjyKA7Bgmj0RjVl9rkLurAt0mVt8r2PANnM0_wb2y4uOaYTVfIVdpcBpdLSmkvYc36Qc8X9zeE-RReCPxCSisvVaWuw8mTW-Hz6Z-xQcCfOG_patSFSdZhqPx9M-lLx0g7AYaHfnnVc57rj5w4rfxUOFp14/s320/WhatsApp%20Image%202026-04-28%20at%2011.16.43%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg61LqIAt6GmwNGBEtTpMQV_IdbXNyGIiLcJHRPJfWtyPefsTv1v8x1-criPRSKrdmtjQjKKOyyPC65UetzV0hLrSHgoIh0KCxqm6z3bhvx_QKhXPs1tIqJbHJFvp75oVjjDx_pXfDDm0ujL41vUuWpbYXEJAW7vVr0APzCq18r-RNVpPwHmU9zpUtunqI/s320/WhatsApp%20Image%202026-04-28%20at%2013.00.27%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi55epYQ0tJxr3fKlBZfY9FwAAURNNXJ4H0tx1yotc2bSeEQ5ut50mKDJArSSiXlT_sIy6YMMMcdLxutNtnKTlfQWTd7-iM941SqgGiwSvt27educvMP4zyuzjeD8Jlvpzp3u96iYoqt4Fc8j0e6E-GaR4GyUL0PcbINI43a6RUQVA-VHnod0lpCDnTwks/s320/WhatsApp%20Image%202026-04-28%20at%2012.33.36%20(1).jpeg",
  // Foto Terbaru (Koleksi Sebelumnya)
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXvHcPl23ZQKxRB4__SsO3dYkxDq0xL5mtkahyphenhyphen2uURV88bYSKuK-gnDmA_ORxZKDMovcfZL4odftgC6RSmfHVrDkVEOdBkukU1SSTptA8OHIElI6NmEUx_o2s9AbLpPVHl7LYoiHCKvTmwD0oOZjHkJxvgzq1gPO9AztyLzCHgiD3BJQgS3nPOoN8aHcs/s320/WhatsApp%20Image%202026-04-19%20at%2011.56.04%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs0tJ4895YBgINhXq4EdPhXD4jcbvNm7Yz3QC4vWJIWZZxWs5OwDomzCX5HGg5FVm-LaXPWS3lt5J5P6J9TcJ1M1xeuouvjRd7mMcJQcV5FSWZkQpxg2SmwZvBCnv9RuP3DUr7BoLcWWJU0by5fXWKYL35mdLkQsmGWy-kkw7nHesJgKly7vbwUvkd6Q4/s320/WhatsApp%20Image%202026-04-19%20at%2011.58.30%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiDMcHswDcleDBhm8GBe0G0kEJ9hxXN1gK2R30pr9mzjeGKndKU9uN6PWL8UXwWbc10orm2Wr86CvMJNQvO-wj3vkmcJBnayARzaxU5MfAcaGdQpeYiG1xSuMy5ppxHwus9V9_Hmw5nJYvxlOTIEIRZajnb5oW8-ZobYF9vkbZimvALAQarKOOPZtCn_E/s320/WhatsApp%20Image%202026-04-19%20at%2012.02.19%20(1).jpeg",
  // Koleksi Lama
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghUhghuJWgQS8KcxPSXUoBC6LpG-y6YiNKfozmkP_T5e1VkT6i0HC5bMvh-zg5ed2CN8AaHSLlrTb-Dot7oCrLVnP5AHmhETZ9rmY7yP_pdYXEzXvzCp8LFJ2CUUmoWKWrsq8ZkzcPwxi3RbfwP_S1tZE5ltjhxTjIBk92yiucIZzYZLUsayJdVAYVw1E/s320/WhatsApp%20Image%202026-02-08%20at%2017.27.55%20(2).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGSbSLo-BCtowEIu8fEn5yX9k22N_EeF4NLrklc62t_kTqKEtTPhKwlxUX8heh5j1Gv96InGXRzDxp9bTvPZUHK1qaZvsuTgifUfX59V2g7_d3HfJe_82-OVWJpCdiEu1h6dnFs9xZa2A-gwERMpJqvuJ3HHZCkfufi4OAgyNtCs1govNO8_NpXmIlEcA/s320/WhatsApp%20Image%202026-02-08%20at%2016.42.46%20(1)%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYk0RrOxybhaj583jAlqQR7L2h2vtUR7YMRHFtl9tzbPdATJAUoRXjMl0LRXYalezg0LUlBY5LFnX5GVB51Qb9tpoLLbTQwKGr3LXvVyCMDr6IkIf6kKlgIwiUuQinDQsh0edpe0i5meK-vYQQlIU9YYpTZUVPhlzVXTwF0sOCh-mASDNMAIjMpOxRGKI/s320/WhatsApp%20Image%202026-04-19%20at%2009.30.13%20(1)%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNPEcSu3WMYi9Jgbi6dJ403I_FYegx237lFsJGcAq6asir4YKl4laZ3qWGbwPxxpXNzxkafd1oBf_wliWGGUFjz7GcmKOcdzbrrZh5zwWNdxDGqX4oTbAYfVSjSN7bWz85RrvyCzmz5s_pdL4xgBhn-nhZdrHXt86FhtWPpAr96Avy3u0s6HWm_P8qjZA/s320/WhatsApp%20Image%202026-04-19%20at%2009.30.14%20(1)%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEUJ0uAgNhJJJzG-ZP8KoLuzFm4Q51cvqx1fKO3fdPD9a0JI4VwpULajm-ImRlUyVQbs4jOI0U0ndcDJQzvdSVM66dbWOmdKJREDecS_qHraRvzzQnv87wUZPrToNZsNMUKRi-KCMNH_Xw3yp-Om3IX0YrUXRCMwTp_lagKZYS8davJ_XXgJuaI54ShlY/s320/WhatsApp%20Image%202026-04-19%20at%2009.33.42%20(1)%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidkDqHdiF7VkPZuWPv5VoLrKqk8kQtuioOs6xuvx2584330onu6dJEedjX2AwM5NO61DrzYGqeL4n8tBmWG1O7wVn0GvUG9X3aRa0HAj027eSjC7CX5KOeAmdg88IBtA4Fzfv6xLBhH_LvBcNb5GxsZLHZdK8JOIxKxSqs4LU1KHisJ0VSOXMG6dvBeM4/s320/WhatsApp%20Image%202026-04-19%20at%2009.48.38%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3NAZDib8pixNMayt894wCp5_lYp3rW7T2r1RjuZB66miYLiu9uAChE7Xq9YbdfWgLEN6FBYw-JLWHMd-mjjXUyJxWztNGkxAfVJJtxCXzDuigs8VnR8VvtcQ3ekEWCU4VTrBcgS3Lnx2mud9d_r1kwk2zcmAAVciylvUAImz3-QM2wwdMSWBO1z2xegA/s320/Screenshot_12%20(1).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkGNa3tEc0OL7s4TY9VO6uytn1tcWc6XP3S6cTzFdFoNwrKLYcLxADQhsOJs2-I0OJXw94gFq_g6KxXer9GlSULdSvxJ2dq7KRjbTkU5CCNuRhTOD9Io9XHtfCEEeMPtWuL9kDaSYzpOQsD-umKByW78dbc_boUuvUN8bV44y_OlprmiNp0K2NTnDfQkk/s320/WhatsApp%20Image%202026-04-19%20at%2010.14.48%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbdFuuJmzYzJgdVAyxbLkHbe99Z5e1hiqGoOv3-iyd1O92IIN6onUvUQSgvpg_HkVuHXsS4LVZRc4xfkIbu1hnddCAlb87IQ6rzm04H1wYyVM0I6w4LMdW7JnYzYFndEd_YCSNDcfTZ7wQeiAwyxnAE-8QI24KNHC6UGKudzHTIh40CY-hY9JDItJXUi0/s320/Screenshot_11%20(1).png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC-UDwDy2ZrHXItLiabtJ5v8gK_7QVd9_SDC-6neUStVPBAmcygGFHAS0kWOEj-_yq7jaTVF6YE5yV-QT3-MOguo8A4RK3EUcPKlhVMMhkkffoPKBpO8D2HEBRBytLomVOfS5Wc6Uyx6o_7YUfQ-4VMWMeejA8fWGFWuG01_7WXkt5rOw-CrXrBSha3rc/s320/WhatsApp%20Image%202026-04-19%20at%2010.14.49%20(1)%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsQFD-ipl7nh5lOcfNiRLtgJU0tsynp-tiXwuJDAkhyphenhyphenGgmgo8s4mAn5vIirxDY1oQg30mknQ4pjvNPaY_RYpJTMnBDj0dtXXW9_C7yxt3ptsAqwtlWkWmXpU02YA74LudMPf4OH7Bpk-5pKvyNpMXO8gnBLj6HZm614cTCb0uUn02sToVPve3jzsTX0JU/s320/WhatsApp%20Image%202026-04-19%20at%2010.48.19%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjGc8-kSo5WcujlvbV9-I41fbRhBrGH9cUK4v75L5Bxc4nETIj7EeudC8f1dw0ClBmXMXi889Rv-1d4p0ugMZ21eXmUda4DvrdHuoota0Uimfi9pXOUUDL7C04SiEWb5XPa63hmfO0WuN0LBabTHJ78-2a2MhD4qEN8EBsuBVeX-SMF2fLXNVdC6rc-AU/s320/WhatsApp%20Image%202026-04-19%20at%2010.50.16%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcjWv3EJ1E_5MU-eZTXPP2T-9ak2vW2q83WH-ywdB29kQrgHMNLgZt8uOp3ATgfwlpAnDlexfFZU6gLPa05zd7JJw991WEZLBrjG91ks5fE6lQwDSRDAQPkLLttpSCFnd6W_2zhUh_bOP3pSdJvMP59Mn5wb3uN3kk-cvrH9UiIZ5WIc3x2yZNQYo2uUI/s320/ezgif-frame-034%20(1).jpg"
];

const GaleriAksi: React.FC = () => {
  return (
    <div className="w-full mt-12 mb-8">
      <div className="flex items-center gap-3 mb-6 px-1">
        <div className="p-2.5 bg-[#0C1A69] rounded-2xl shadow-lg transform -rotate-3">
          <span className="text-xl">📸</span>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-black text-[#0C1A69] uppercase tracking-tighter leading-none">
            Galeri Aksi MANDAI
          </h2>
          <p className="text-[10px] md:text-xs font-bold text-[#0C1A69]/60 mt-1.5 uppercase tracking-widest">
            Bukti Nyata Keseruan Belajar di Kelas
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing px-1">
        {galeriData.map((imgUrl, index) => (
          <div 
            key={index} 
            className="min-w-[300px] md:min-w-[420px] aspect-video rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white snap-center transform transition-all hover:scale-[1.02] hover:rotate-1 duration-300"
          >
            <img 
              src={imgUrl} 
              alt={`Momen MANDAI ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-3 mt-2 opacity-50">
        <div className="w-16 h-1.5 bg-[#0C1A69]/10 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-[#0C1A69] animate-pulse"></div>
        </div>
        <span className="text-[9px] font-black text-[#0C1A69] uppercase tracking-[0.3em] animate-pulse">Geser Untuk Inspirasi</span>
      </div>
    </div>
  );
};

export default GaleriAksi;