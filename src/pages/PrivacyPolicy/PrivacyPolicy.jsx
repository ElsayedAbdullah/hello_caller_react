import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header className='search-header' />
      <div className='pp-banner'>
        <div className='container'>
          <h1>Privacy Policy</h1>
          <p>Last updated: July 03, 2021</p>
        </div>
      </div>

      <div className='pp-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-lg-9 col-xl-8 m-auto'>
              <div className='pp-text'>
                <div className='topic'>
                  <h2>General</h2>
                  <p>Hello? Caller ID respects your privacy and the need for protection of the Personal Data you share with Hello? Caller ID.</p>
                  <p>To better protect your privacy, Hello? Caller ID provides this Privacy Policy (“Policy”), explaining Hello? Caller ID’s information practices, including how Hello? Caller ID collects and uses the Personal Data you may provide to Hello? Caller ID through Hello? Caller ID’s application, and the choices you can make about the way your Personal Data is collected and used.</p>
                  <p>Hello? Caller ID is committed to compliance and adherence to Personal Data privacy and protection laws, rules, and regulations. Please take the time to read our Policy fully. Note Hello? Caller ID does not control and is not responsible for the privacy policies, practices, or the content of any third party. Hereafter, Hello? Caller ID will explain what Personal Data is collected and for what purpose</p>
                </div>
                <div className='topic'>
                  <h2>Data Collection and Processing</h2>
                  <p>Hello? Caller ID hereby confirms that the collection, processing, and use of Personal Data is done in compliance with all data protection regulations and is in adherence to the laws, specifically the GDPR, the CCPA, the LGPD, the PDPB alongside the other data protection laws. This means Hello? Caller ID only processes Personal Data in case of legitimate interest or under permission of processing by the user.</p>
                  <p>Hello? Caller ID has technical, contractual, and organizational measures in place to ensure that the data protection rules are abided by and that Personal Data is secure from access and manipulation. Hello? Caller ID collects the following category of Personal Data which are relevant for using of the services: phone number, functioning as a user IDCaller ID collects contact data in order to provide the basic functionality of the application.</p>
                  <p>Please note that for the efficient operation of the application, the user has to grant access permission on the access to:</p>
                  <ul>
                    <li>
                      <strong>The call log:</strong> to identify the caller's number and to organize the call list inside the Hello? Caller ID’s application.
                    </li>
                    <li>
                      <strong>The contact list:</strong> to identify if the user knows the caller.
                    </li>
                    <li>
                      <strong>The phone status:</strong> for the purpose of the detecting phone calls.
                    </li>
                    <li>
                      <strong>The phone number:</strong> to organize the call list inside the Hello? Caller ID’s application.
                    </li>
                  </ul>
                  <p>All of this Personal Data is subject to special protection in accordance with the regulations under data protection law, which Hello? Caller ID guarantees through technical and obligatory measures. This Personal Data cannot be assigned to any particular person. Merging of this Personal Data with other data sources will not be done.</p>
                </div>
                <div className='topic'>
                  <h2>Cooperation with Third Parties</h2>
                  <p>Hello? Caller ID only passes on Personal Data to third parties under permission or on the basis of justified interest and economic operations in Hello? Caller ID’s business. Approval of information processing by third parties is given on the basis of a signed Data Protect Agreement.</p>
                  <p>Transmission to Third Countries The transmission or processing of Personal Data to third countries with express consent only occurs if it fulfills a legal obligation or is of justified interest to Hello? Caller ID. Hello? Caller ID only processes Personal Data in a third country under the legal and contractual agreement if an appropriate data-protection level is met.</p>
                </div>
                <div className='topic'>
                  <h2>Beacons and cookies</h2>
                  <p>Hello? Caller ID may use cookies, tracking pixels, and other similar beacon technologies to provide services to Partners. Cookies are small data files stored on a user's device that help to identify the same user's browser. Using cookies is a common and prevalent practice. Cookies can be removed using privacy preferences in the user's browser or application or using general system privacy settings (such as available in Android operating systems, for instance).</p>
                </div>
                <div className='topic'>
                  <h2>Request for access to and correction of Personal Information</h2>
                  <p>Each user of Hello? Caller ID's application may update, edit, delete, withdraw consent for the collection and obtain a copy of Personal Data. Once collected, all Personal Data will be stored safely for record-keeping purposes. Please be advised that Hello? Caller ID may retain and use your Personal Data as necessary to comply with its legal obligations and resolve disputes.</p>
                </div>
                <div className='topic'>
                  <h2>Term of store Personal Information</h2>
                  <p>Hello? Caller ID collects and stores Personal Data for as long as this data is relevant and necessary to provide the basic functionality of the application.</p>
                </div>
                <div className='topic'>
                  <h2>Children’s PrivacyHello?</h2>
                  <p>Caller ID does not address anyone under the age of 14. Hello? Caller ID does not knowingly collect personally identifiable information from children under 18.</p>
                </div>
                <div className='topic mb-0'>
                  <h2>Changes</h2>
                  <p>Hello? Caller ID reserves the right to amend this Privacy Notice from time to time. Contact us If you have any questions or comments about this Privacy Policy.</p>
                  <p>
                    Please contact Hello? Caller ID at <a href='mailto:support@hellocallers.com'>support@hellocallers.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
