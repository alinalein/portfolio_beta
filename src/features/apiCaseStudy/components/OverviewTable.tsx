
import Texts from '../../../shared/utils/texts';
import { useAppContext } from '../../../shared/context/AppContext';

const OverviewTable = (): JSX.Element => {

    const { language } = useAppContext();

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>{Texts[language].case_api.overview.purpose_and_context.title}</th>
                        <th>{Texts[language].case_api.overview.project_duration.title}</th>
                        <th>{Texts[language].case_api.overview.objective.title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>{Texts[language].case_api.overview.purpose_and_context.description}</td>
                        <td>{Texts[language].case_api.overview.project_duration.description}</td>
                        <td>{Texts[language].case_api.overview.objective.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverviewTable;