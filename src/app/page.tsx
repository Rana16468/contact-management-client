import Image from 'next/image';
import './style.css'
import Home from '@/components/shared/Home';

const HomePage = () => {
  return (
    <>
  
      <div className="flex justify-center items-center bg-[url('https://media.licdn.com/dms/image/D4D12AQHE4cTf0m240A/article-cover_image-shrink_720_1280/0/1687174503936?e=2147483647&v=beta&t=qdCq9KjDnGTJwmb-yZCcaoOze6getXKmLpkK3Tx75Sc')] bg-gray-600 bg-blend-multiply">
                <div className="partners-intro--thumb aos-init aos-animate bg-[url('https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/bg/partners-circle.png')" >
                    <div className="partners-intro--partners">
                        <div className="partners-intro--partners-item -pos-1">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-1.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-2">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-2.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-3">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-3.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-4">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-4.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-5">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png" width={50} height={50}  alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-5.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-6">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-6.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-7">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-7.png" data-was-processed="true" />
                        </div>
                        <div className="partners-intro--partners-item -pos-8">
                            <Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/icons/partner-icon-8.png" data-was-processed="true" />
                        </div>

                    </div>
                    <div className="partners-intro--logo">
                        < Image className="lazy loaded" data-src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg" width={50} height={50} alt="" src="https://fieldedge.com/wp-content/themes/fieldedge/assets/dist/images/logo-vector.svg" data-was-processed="true" />
                    </div>
                </div>
            </div>
            <Home/>

    </>
  );
};

export default HomePage;
